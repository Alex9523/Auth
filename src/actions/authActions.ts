import {
  LOGIN,
  LOGOUT,
} from "const/actionTypes/authTypes";
import { IActionFn, IAuthAction } from "interfaces";

export const login: IActionFn<IAuthAction> = (
  payload,
) => ({
  payload,
  type: LOGIN.PENDING,
});

export const authorized = () => ({
  type: LOGIN.SUCCESS,
});

export const logOut = () => ({
  type: LOGOUT.PENDING,
});

