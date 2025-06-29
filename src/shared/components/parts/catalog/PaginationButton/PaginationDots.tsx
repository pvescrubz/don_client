import clsx from "clsx";
import styles from "./PaginationButton.module.css";

export const PaginationDots = () => {
  return <span className={clsx(styles.root, styles.dots)}>...</span>;
};
