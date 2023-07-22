import * as React from "react";

import cn from "classnames";
import { useNavigation } from "hooks/useNavigation";
import { Link } from "react-router-dom";

import s from "./Nav.module.scss";

type Props = {
  nav: { label: string; link: string }[];
  handleClick?: () => void;
  className?: string;
  disabled?: boolean | undefined;
};

export const Nav = ({ nav, handleClick, className, disabled }: Props) => {
  const { selectedIndex } = useNavigation(nav);

  return (
    <ul className={cn(s.nav, className ? s[className] : "")}>
      {nav.map(({ label, link }, idx) => {
        return (
          <li
            key={label}
            className={
              cn(
                s.item,
                selectedIndex === idx ? s.current : "",
                disabled && s.disabled
              )}
            onClick={handleClick}
          >
            <Link to={link} className={s.link}>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
