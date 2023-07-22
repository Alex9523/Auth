import React from "react";

import cn from "classnames";
import { colorClass, renderClass } from "helpers/buttonClassNameCreator";

export type IButton = {
  id?: string | number;
  type?: "submit" | "button";
  value?: string;
  buttonColor?: "primary" | "secondary" | "dark" | "primary-inverted";
  icon?: string | null;
  disabled?: boolean;
  iconType?: "empty" | "square";
  renderType?:
    | "button"
    | "link"
    | "simpleLink";
  additionalClass?: string;
  size?: "normal" | "large" | "small" | "xl";
  children?: React.ReactNode;
  opacity?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<IButton> = ({
  type = "button",
  value = "",
  onClick,
  disabled = false,
  size = "normal",
  renderType = "button",
  additionalClass,
  buttonColor,
  children,
  opacity = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        renderClass(renderType),
        buttonColor ? colorClass(buttonColor) : null,
        additionalClass,
        size !== "normal" ? size : null,
        opacity ? "opacity" : null
      )}
    >
      {children ? (
        children
      ) : value && <span>{value}</span>}
    </button>
  );
};
