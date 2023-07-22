import {
  GET_PROFILE
} from "const/actionTypes/profileTypes";
import { makeCombinedAction } from "helpers";
import Immutable from "immutable";
import { handleActions } from "redux-actions";

const { PENDING, DONE } = makeCombinedAction(GET_PROFILE);

export interface IProfileReducerState {
  userData: any,
  isLoading: boolean,
}

const initialState = Immutable.fromJS({
  userData: {},
  isLoading: false,
} as IProfileReducerState);

const profileReducer = handleActions(
  {
    [PENDING]: (state: any) => {
      return state.set("isLoading", true);
    },
    [`${DONE}`]: (state: any) => {
      return state.set("isLoading", false);
    },
    [GET_PROFILE.PENDING]: (state: any) => {
      return state.set("isLoading", true);
    },
    [GET_PROFILE.SUCCESS]: (state: any, { payload }) => {
      return state
        .set("userData", payload);
    },
    [GET_PROFILE.FAILURE]: (state: any) => {
      return state
        .set("isLoading", false);
    },
  },
  initialState
);

export default profileReducer;
