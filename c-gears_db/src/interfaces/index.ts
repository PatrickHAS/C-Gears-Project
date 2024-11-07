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
