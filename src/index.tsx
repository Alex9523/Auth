import React from "react";

import ReactDOM from "react-dom";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from "./components/pages/Static/ErrorBoundary";
import App from "./routes/App";
import store from "./store/store";
import { Toast } from "./components/common/Toast/Toast";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
          <Toast />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
