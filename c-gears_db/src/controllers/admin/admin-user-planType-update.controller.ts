import { Request, Response } from "express";
import adminUpdateUserPlanTypeService from "../../services/admin/admin-user-planType-update.service";

const adminUpdateUserPlanTypeController = async (
  req: Request,
  res: Response,
) => {
  const { id, planType } = req.body;

  const updatedPlanType = await adminUpdateUserPlanTypeService(id, planType);

  return res.json(updatedPlanType);
};
export default adminUpdateUserPlanTypeController;
