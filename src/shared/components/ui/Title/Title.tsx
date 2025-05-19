import { THeading } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Title.module.css";

export const Title: FC<THeading> = ({ children, className, ...rest }) => {
  return (
    <h2 className={clsx(styles.root, className)} {...rest}>
      {children}
    </h2>
  );
};
