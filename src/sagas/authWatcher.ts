import { makeAction, storageSvc } from "helpers";
import { put, takeLatest } from "redux-saga/effects";
import { credentials } from "mockData/credentials";
import { StaticRoute } from "const/routes";
import { LOGIN, LOGOUT } from "const/actionTypes/authTypes";


function* login({ payload }: any) {
  const {
    email,
    password
  } = payload;
  try {
    const res: boolean = credentials.email === email && credentials.password === password;
    if (res) {
      storageSvc.setItem('isAuth', true);
      yield put(makeAction(LOGIN.SUCCESS, res));
      window.location.pathname = StaticRoute.PROFILE;
    } else {
      yield put(makeAction(LOGIN.FAILURE, res));
    }
  } catch (error) {
    yield put(makeAction(LOGIN.FAILURE, error));
  }
}

function* logOut() {
  try {
    storageSvc.removeItem('isAuth');
    yield put(makeAction(LOGOUT.SUCCESS));
  } catch (error) {
    yield put(makeAction(LOGOUT.FAILURE, error));
  }
}

export function* authWatcher() {
  yield takeLatest(LOGIN.PENDING, login);
  yield takeLatest(LOGOUT.PENDING, logOut);
}
