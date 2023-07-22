import React from "react";

import cn from "classnames";

import { variantsMapping } from "./consts";
// eslint-disable-next-line
import s from "./Typography.module.scss";

interface ITypography {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subheading1"
    | "subheading2"
    | "body1"
    | "body2"
    | "large"
    | "span";
  color?: string;
  children: any;
  style?: object;
  stylesObject?: any;
  className?: string;
  tagName?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subheading1"
    | "subheading2"
    | "body1"
    | "body2"
    | "large"
    | "span";
}

export const Typography = ({
  variant,
  tagName,
  color,
  children,
  stylesObject,
  className,
  ...props
}: ITypography) => {
  const Component: any = tagName ? variantsMapping[tagName] : "p";

  return (
    <Component
      className={cn(
        {
          [s["reset"]]: "reset",
          [s[`typography--variant-${variant}`]]: variant,
          [s[`typography--color-${color}`]]: color,
        },
        stylesObject && className ? stylesObject[className] : className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
