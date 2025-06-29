import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Container.module.css";

export const Container: FC<TDiv> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {children}
    </div>
  );
};
