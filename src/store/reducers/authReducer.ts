import {
  LOGIN,
  LOGOUT,
} from "const/actionTypes/authTypes";
import { makeCombinedAction } from "helpers";
import Immutable from "immutable";
import { handleActions } from "redux-actions";

const { PENDING, DONE } = makeCombinedAction(LOGIN, LOGOUT);

export interface IAuthReducerState {
  isAuthenticated: boolean,
  isError: boolean,
  isLoading: boolean,
}

const initialState = Immutable.fromJS({
  isAuthenticated: false,
  isError: false,
  isLoading: false,
} as IAuthReducerState);

const authReducer = handleActions(
  {
    [PENDING]: (state: any) => {
      return state.set("isLoading", true);
    },
    [`${DONE}`]: (state: any) => {
      return state.set("isLoading", false);
    },
    [LOGIN.PENDING]: (state: any) => {
      return state.set("isLoading", true);
    },
    [LOGIN.SUCCESS]: (state: any) => {
      return state
        .set("isAuthenticated", true)
        .set("isError", false);
    },
    [LOGIN.FAILURE]: (state: any) => {
      return state
        .set("isAuthenticated", false)
        .set("isError", true);
    },
    [LOGOUT.PENDING]: (state: any) => {
      return state.set("isLoading", true);
    },
    [LOGOUT.SUCCESS]: (state: any) => {
      return state
        .set("isAuthenticated", false)
        .set("isError", false)
        .set("isLoading", false);
    },
    [LOGOUT.FAILURE]: (state: any) => {
      return state
        .set("isAuthenticated", false)
        .set("isError", false)
        .set("isLoading", false);
    },
  },
  initialState
);

export default authReducer;
