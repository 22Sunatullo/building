import React, { ReactNode } from "react";

import style from "./Wraper.module.scss";

interface WrapperProps {
  children: ReactNode;
}
export const Wrapper = ({ children }: WrapperProps) => {
  return <div className={style.wraperc}>{children}</div>;
};
