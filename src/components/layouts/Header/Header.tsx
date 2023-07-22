import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { Nav } from "components/common";
import LOGO from "assets/images/logo.png";
import { staticNavigation } from "const/navigations";
import { RefContext } from "context/RefContext";
import { makeSelector } from "helpers";
import { useDispatch, useSelector} from "react-redux";
import { IAuthReducerState } from "store/reducers/authReducer";
import { logOut } from "actions/authActions";
import { StaticRoute } from "const/routes"

import { Button } from "../../common";
import s from "./Header.module.scss";

export const Header = () => {
  const navigate  = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector<IAuthReducerState, string>(
    makeSelector(["authReducer", "isAuthenticated"])
  );

  const submit = () => {
    dispatch(logOut());
    navigate(StaticRoute.LOGIN)
  }

  const refHeader = useContext(RefContext);

  const logOutr = (
    <Button
      onClick={submit}
      renderType={"simpleLink"}
      value="Log Out"
    />
  )

  return (
    <header className={s.header} ref={refHeader}>
      <div className={s.container}>
        <div className={s.sidebar}>
          <div className={s.logo}>
            <img src={LOGO} alt="logo" />
          </div>
        </div>
        <div className={s.navHolder}>
          <Nav nav={staticNavigation} className={"mainNav"} disabled={!isAuthenticated} />
          {isAuthenticated && logOutr}
        </div>
      </div>
    </header>
  );
};
