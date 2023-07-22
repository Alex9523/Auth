import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeSelector } from "helpers";
import { IProfileReducerState } from "store/reducers/profileReducer";
import { getProfile } from "actions/profileActions";

// eslint-disable-next-line
import s from "./Profile.module.scss";

export const Profile = () => {
  const dispatch = useDispatch();

  const {
    name,
    surname,
    description,
    linkedin,
    cv,
  } = useSelector<IProfileReducerState, any>(
    makeSelector(["profileReducer", "userData"])
  );

  const isLoading = useSelector<IProfileReducerState, any>(
    makeSelector(["profileReducer", "isLoading"])
  );

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return isLoading ? <></> :
    <main className={s.profileWrapper}>
      <div className={s.fio}>
        <h3>{name && name} {surname && surname}</h3>
        <Link to={linkedin ? linkedin : '/'} target="_blank" >Linkedin</Link>
        <Link to={cv ? cv : '/'} target="_blank" >CV</Link>
      </div>
      <h4>Summary:</h4>
      <p>{description && description}</p>
    </main>
};
