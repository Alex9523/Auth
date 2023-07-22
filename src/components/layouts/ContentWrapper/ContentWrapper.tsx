import React from "react";

// eslint-disable-next-line
import s from "./ContentWrapper.module.scss";

type Props = {
  children: React.ReactNode;
};

export const ContentWrapper = ({ children }: Props) => {
  return <div className={s.wrapper}>{children}</div>;
};
