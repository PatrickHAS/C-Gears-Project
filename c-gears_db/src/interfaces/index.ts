export interface IUserCreate {
  name: string;
  surname: string;
  username: string;
  cellphone: string;
  birthday: Date;
  ssn: string;
  email: string;
  password: string;
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
