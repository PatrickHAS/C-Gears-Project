import { LinkedAccountProvider } from "../entities/user-linked-account.entity";

export interface IUserCreate {
  name: string;
  surname: string;
  username: string;
  cellphone: string;
  birthday: Date;
  email: string;
  password: string;
  isAdm?: boolean;
  address: IUserAddress;
}

export interface IUserAddress {
  street: string;
  number: string;
  apt_unit?: string;
  neighborhoods?: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface IAdminCreate {
  username: string;
  password: string;
  email: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  surname?: string;
  username?: string;
  email?: string;
  cellphone?: string;
  birthday?: Date;
  password?: string;
  address: IAddressUpdate;
}

export interface IAddressUpdate {
  street?: string;
  number?: string;
  apt_unit?: string;
  neighborhoods?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

export interface IUserResetPass {
  password?: string;
}

export interface ILinkAccountRequest {
  userId: string;
  provider: LinkedAccountProvider;
  providerId: string;
  gamertag: string;
}

export interface ILinkAccountMe {
  id: string;
  name: string;
  surname: string;
  username: string;
  linkedAccounts: Array<{
    id: string;
    provider: string;
    gamertag: string;
    status: string;
    linkedAt: Date;
    canUnlink: boolean;
  }>;
}

export interface IIdParams {
  id: string;
}

export interface IAuthUser {
  id: string;
  steamid?: string;
  displayName?: string;
  isAdm: boolean;
  isActive: boolean;
  availability: boolean;
}
