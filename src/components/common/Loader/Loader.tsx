import React from "react";

import cn from "classnames";

// eslint-disable-next-line
import s from "./Loader.module.scss";

type Props = {
  fullscreen?: Boolean;
};

export const Loader = ({ fullscreen }: Props) => {
  return (
    <div className={cn(s.wrapper, fullscreen ? s.fullscreen : null)}>
      <div className={s.item}>
        <i className={s.loader}></i>
      </div>
    </div>
  );
};
