
import { TSection } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Section.module.css";

export const Section: FC<TSection> = ({ children, className, ...rest }) => {
  return (
    <section className={clsx(styles.root, className)} {...rest}>
      {children}
    </section>
  );
};
