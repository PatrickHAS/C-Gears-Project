import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entity";

const adminUpdateUserPlanTypeService = async (
  userId: string,
  newPlan: string,
): Promise<Users> => {
  const userRepository = AppDataSource.getRepository(Users);

  const user = await userRepository.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  user.planType = newPlan;

  await userRepository.save(user);

  return user;
};

export default adminUpdateUserPlanTypeService;
