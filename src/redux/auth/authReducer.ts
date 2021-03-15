import { authReducerActions } from "./constants";
import { authActionTypes } from "./actions/types";

interface stateInterface {
  isAuth: boolean;
}

const initialState: stateInterface = {
  isAuth: false,
};

export const authReducer = (state = initialState, action: authActionTypes) => {
  switch (action.type) {
    case authReducerActions.SIGNUP:
      break;
    case authReducerActions.LOGIN:
      break;
    case authReducerActions.LOGOUT:
      break;
    default:
      return state;
  }
};
