import * as express from "express";

declare global {
  namespace Express {
    interface User {
      id?: string;
      steamid?: string;
      displayName?: string;
      isAdm: boolean;
      isActive: boolean;
      availability: boolean;
    }

    interface Request {
      user?: User;
      userToken?: IUserToken;
    }
  }
}
export {};
