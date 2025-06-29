import { THeading } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Title.module.css";

interface ITitle extends THeading {
  h1?: boolean;
}

export const Title: FC<ITitle> = ({
  children,
  className,
  h1 = false,
  ...rest
}) => {
  return (
    <>
      {!h1 && (
        <h2 className={clsx(styles.root, className)} {...rest}>
          {children}
        </h2>
      )}
      {h1 && (
        <h1 className={clsx(styles.root, className)} {...rest}>
          {children}
        </h1>
      )}
    </>
  );
};
