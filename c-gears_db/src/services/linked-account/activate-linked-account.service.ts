import AppDataSource from "../../data-source";
import {
  LinkedAccount,
  LinkedAccountStatus,
} from "../../entities/user-linked-account.entity";
import { AppError } from "../../errors/app-error";

const activateLinkedAccountService = async (
  userId: string,
  linkedId: string,
) => {
  const linkedRepo = AppDataSource.getRepository(LinkedAccount);

  const account = await linkedRepo.findOne({
    where: { id: linkedId },
    relations: ["user"],
  });

  if (!account) {
    throw new AppError("Account not found", 404);
  }

  if (account.user.id !== userId) {
    throw new AppError("Access denied", 403);
  }

  if (account.status === LinkedAccountStatus.BANNED) {
    throw new AppError("Banned account cannot be activated.", 400);
  }

  if (account.status === LinkedAccountStatus.ACTIVE) {
    throw new AppError("The account is already active.", 400);
  }

  const activeAccount = await linkedRepo.findOne({
    where: {
      user: { id: userId },
      provider: account.provider,
      status: LinkedAccountStatus.ACTIVE,
    },
  });

  if (activeAccount) {
    throw new AppError(
      "You already have an active account with this provider. Deactivate it first.",
      400,
    );
  }

  account.status = LinkedAccountStatus.ACTIVE;

  await linkedRepo.save(account);

  return { message: "Account activated successfully" };
};

export default activateLinkedAccountService;
