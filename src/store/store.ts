import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "sagas";

import { rootReducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const enhancers: any[] = [];

if (process.env.NODE_ENV === "development") {
  enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
}

const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  ...enhancers
);

const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
