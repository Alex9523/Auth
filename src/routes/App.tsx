import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from 'react-router-dom';
import { authorized } from "actions/authActions";
import { Route, Routes } from "react-router-dom";
import { LogIn } from "components/pages/LogIn/LogIn";
import { Profile } from "components/pages/Profile/Profile";
import { Header } from "components/layouts/Header/Header";
import { Wrapper } from "components/layouts/Wrapper/Wrapper";
import { NotFoundPage } from "components/pages/NotFoundPage/NotFoundPage";
import {
  NotFoundRoute,
  StaticRoute,
} from "const/routes";

import { makeSelector, storageSvc } from "../helpers";
import { IAuthReducerState } from "../store/reducers/authReducer";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const isAuth = storageSvc.getItem('isAuth');
  const is = useSelector<IAuthReducerState, string>(
    makeSelector(["authReducer", "isAuthenticated"])
  );

  useEffect(() => {
    if(!isAuth) {
      navigate(StaticRoute.LOGIN)
    } else if (isAuth && !is) {
      dispatch(authorized());
    }
  }, []);

  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Routes>
          <Route path={StaticRoute.ROOT} element={<p>Main</p>} />
          <Route path={NotFoundRoute} element={<NotFoundPage />} />
          <Route path={StaticRoute.LOGIN} element={<LogIn />} />
          <Route path={StaticRoute.PROFILE} element={<Profile />} />
          <Route path={StaticRoute.NEWS} element={<p>NEWS</p>} />
        </Routes>
      </Wrapper>
    </div>
  );
};

export default App;
