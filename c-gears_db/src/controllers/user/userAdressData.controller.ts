import { Request, Response } from "express";
import userAdressDataService from "../../services/users/userAddressData.service";

const userAdressDataController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const userAdress = userAdressDataService(id);

  return res.status(200).json(userAdress);
};
export default userAdressDataController;
