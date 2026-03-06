import AppDataSource from "../../data-source";
import { LinkedAccount } from "../../entities/user-linked-account.entity";
import { Users } from "../../entities/user.entity";
import { ILinkAccountMe } from "../../interfaces";

const linkAccountMeService = async (
  userId: string,
): Promise<ILinkAccountMe> => {
  const linkedRepo = AppDataSource.getRepository(LinkedAccount);
  const userRepo = AppDataSource.getRepository(Users);

  const user = await userRepo.findOneBy({ id: userId });

  if (!user) {
    throw new Error("User not found");
  }

  const linkedAccounts = await linkedRepo.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  return {
    id: user.id,
    name: user.name,
    surname: user.surname,
    username: user.username,
    linkedAccounts: linkedAccounts.map((acc) => ({
      id: acc.id,
      provider: acc.provider,
      gamertag: acc.gamertag,
      status: acc.status,
      linkedAt: acc.linkedAt,
      canUnlink:
        acc.status === "active" &&
        !!acc.unlinkAvailableAt &&
        new Date() >= acc.unlinkAvailableAt,
    })),
  };
};

export default linkAccountMeService;
