import AppDataSource from "../../data-source";
import {
  LinkedAccount,
  LinkedAccountStatus,
} from "../../entities/user-linked-account.entity";
import { AppError } from "../../errors/app-error";

export const unlinkAccountService = async (
  userId: string,
  linkedId: string,
) => {
  const repo = AppDataSource.getRepository(LinkedAccount);

  const linked = await repo.findOne({
    where: { id: linkedId },
    relations: ["user"],
  });

  if (!linked) {
    throw new AppError("Account not found", 404);
  }

  if (linked.user.id !== userId) {
    throw new AppError("Access denied", 403);
  }

  if (linked.status !== LinkedAccountStatus.ACTIVE) {
    throw new AppError("Account is already inactive");
  }

  if (linked.unlinkAvailableAt && new Date() < linked.unlinkAvailableAt) {
    throw new AppError(
      `You can only deactivate this account after ${linked.unlinkAvailableAt?.toLocaleDateString()}`,
    );
  }

  linked.status = LinkedAccountStatus.INACTIVE;
  linked.unlinkAvailableAt = new Date();

  await repo.save(linked);

  return { message: "Account unlinked successfully" };
};
