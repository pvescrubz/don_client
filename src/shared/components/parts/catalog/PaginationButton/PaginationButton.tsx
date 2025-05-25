import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./PaginationButton.module.css";

interface IPaginationButton extends TButton {
  value?: number;
  active?: boolean;
}

export const PaginationButton: FC<IPaginationButton> = ({
  value,
  children,
  active,
  ...rest
}) => {
  return (
    <>
      {(value || children) && (
        <button
          className={clsx(styles.root, active && styles.active)}
          {...rest}
          inert={active}
        >
          {value ? value : children}
        </button>
      )}
    </>
  );
};
