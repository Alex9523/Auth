import { combineReducers } from "redux-immutable";

import authReducer, { IAuthReducerState } from "./authReducer";
import profileReducer, { IProfileReducerState } from "./profileReducer";

export interface IAppReducer {
  authReducer: IAuthReducerState;
  profileReducer: IProfileReducerState;
}

const appReducer = combineReducers<IAppReducer>({
  authReducer,
  profileReducer,
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
