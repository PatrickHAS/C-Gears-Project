import AppDataSource from "../../data-source";
import {
  LinkedAccount,
  LinkedAccountProvider,
  LinkedAccountStatus,
} from "../../entities/user-linked-account.entity";
import { Users } from "../../entities/user.entity";
import { AppError } from "../../errors/app-error";
import { addMonths } from "date-fns";
import { ILinkAccountRequest } from "../../interfaces";

export const ProviderDisplayName: Record<LinkedAccountProvider, string> = {
  steam: "Steam",
  xbox: "Xbox",
  psn: "PlayStation",
};

export const linkAccountService = async ({
  userId,
  provider,
  providerId,
  gamertag,
}: ILinkAccountRequest) => {
  const linkedRepo = AppDataSource.getRepository(LinkedAccount);
  const userRepo = AppDataSource.getRepository(Users);

  const user = await userRepo.findOne({
    where: { id: userId },
    relations: ["linkedAccounts"],
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  const alreadyLinked = await linkedRepo.findOne({
    where: { provider, providerId },
  });

  if (alreadyLinked) {
    throw new AppError("This account is already linked to another user.");
  }

  const hasActiveProvider = user.linkedAccounts.find(
    (acc) =>
      acc.provider === provider && acc.status === LinkedAccountStatus.ACTIVE,
  );

  if (hasActiveProvider) {
    const providerName = ProviderDisplayName[provider];

    throw new AppError(
      `You already have an active ${providerName} account linked.`,
    );
  }

  const newLinked = linkedRepo.create({
    provider,
    providerId,
    gamertag,
    status: LinkedAccountStatus.ACTIVE,
    linkedAt: new Date(),
    unlinkAvailableAt: addMonths(new Date(), 6),
    user,
  });

  await linkedRepo.save(newLinked);

  return {
    id: newLinked.id,
    provider: newLinked.provider,
    gamertag: newLinked.gamertag,
    status: newLinked.status,
    linkedAt: newLinked.linkedAt,
  };
};
