import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface IButton extends TButton {
  size?: "small" | "normal" | "large";
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}

export const Button: FC<IButton> = ({
  children,
  className,
  size = "normal",
  variant = "primary",
  icon,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.root,
        {
          [styles.small]: size === "small",
          [styles.normal]: size === "normal",
          [styles.large]: size === "large",
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
          [styles.with_icon]: icon,
        },
        className
      )}
      {...rest}
    >
      <span className={styles.span}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </span>
    </button>
  );
};
