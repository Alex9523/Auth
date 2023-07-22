import React, { useState } from "react";

import { useDispatch, useSelector} from "react-redux";
import { Input } from "components/common/Input/Input";
import { Button } from "components/common";
import { login } from "actions/authActions";
import { makeSelector, validation } from "helpers";
import { IAuthReducerState } from "store/reducers/authReducer";

// eslint-disable-next-line
import s from "./LogIn.module.scss";

export const LogIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string | undefined>('');
  const [pass, setPass] = useState<string>('');
  const [passError, setPassError] = useState<string | undefined>('');

  const wrongCredentials = useSelector<IAuthReducerState, string>(
    makeSelector(["authReducer", "isError"])
  );

  const submit = () => {
    setEmailError(validation(email));
    setPassError(validation(pass));

    if(!validation(email) && !validation(pass)) {
      dispatch(login({ password: pass, email: email }));
    }
  }

  return (
    <main className={s.loginWrapper}>
      <h3>Log In</h3>
      <Input
        placeholder="Email"
        onChange={setEmail}
        isError={emailError}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={setPass}
        isError={passError}
      />
      {wrongCredentials && <p>Username or password entered incorrectly</p>}
      <Button
        onClick={submit}
        renderType="button"
        value="Submit"
        buttonColor="secondary"
      />
    </main>
  );
};
