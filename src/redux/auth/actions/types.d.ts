import { authReducerActions } from "../constants";

interface signUpInterface {}

interface loginActionInterface {
  type: typeof authReducerActions.LOGIN;
  payload: {
    status: string;
  };
}

interface logoutActionInterface {
  type: typeof authReducerActions.LOGOUT;
  payload: any;
}

export type authActionTypes = loginActionInterface | logoutActionInterface;
