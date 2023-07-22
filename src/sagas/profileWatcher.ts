import { makeAction } from "helpers";
import { put, takeLatest } from "redux-saga/effects";
import { userData } from "mockData/profile";
import { GET_PROFILE } from "const/actionTypes/profileTypes";

function* getProfile() {
  try {
    const res: any = userData;
    if (res) {
      yield put(makeAction(GET_PROFILE.SUCCESS, res));
    } else {
      yield put(makeAction(GET_PROFILE.FAILURE, res));
    }
  } catch (error) {
    yield put(makeAction(GET_PROFILE.FAILURE, error));
  }
}

export function* profileWatcher() {
  yield takeLatest(GET_PROFILE.PENDING, getProfile);
}
