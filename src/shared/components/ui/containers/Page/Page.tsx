"use client";


import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Page.module.css";

export const Page: FC<TDiv> = ({ children }) => {


  return (
    <div className={clsx(styles.root, 'page')}>
      {children}
    </div>
  );
};
