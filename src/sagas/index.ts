import { all, fork } from "redux-saga/effects";

import { authWatcher } from "./authWatcher";
import { profileWatcher} from "./profileWatcher";

export function* rootSaga() {
  yield all([fork(authWatcher)]);
  yield all([fork(profileWatcher)]);
}
