import React from "react";

import cx from "classnames";

import s from "./Input.module.scss";

type Props = {
  placeholder?: string;
  isError?: string | undefined;
  type?: string;
  onChange: (state: string) => void;
};

export const Input = ({
  placeholder,
  isError,
  type,
  onChange
}: Props) => (
   <div className={s.inputWrapp}>
     <input
        placeholder={placeholder}
        type={type}
        className={cx(s.customStyles, isError && s.isError)}
        onChange={(e)=> onChange(e.target.value)}
      />
    {isError && <p>{isError}</p>}
    </div>
);
