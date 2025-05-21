import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC, InputHTMLAttributes, ReactNode, useId } from "react";
import styles from "./StyledInput.module.css";

export interface IStyledInput extends TDiv {
  InputProps: InputHTMLAttributes<HTMLInputElement>;
  error?: boolean;
  iconLeft?: ReactNode;
  iconRigth?: ReactNode;
  centred?: boolean;
  small?: boolean;
}

export const StyledInput: FC<IStyledInput> = ({
  InputProps,
  error = false,
  className,
  centred,
  iconLeft,
  iconRigth,
  small,
  ...rest
}) => {
  const uniqueId = useId();

  const { className: inputClassName, ...inputProps } = InputProps;

  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <span className={clsx(styles.icon, styles.icon_left)}>
        {iconLeft && iconLeft}
      </span>
      <span className={clsx(styles.icon, styles.icon_right)}>
        {iconRigth && iconRigth}
      </span>
      <input
        id={uniqueId}
        className={clsx(styles.input, inputClassName, {
          [styles.centred]: centred,
          [styles.icon_left]: iconLeft,
          [styles.icon_right]: iconRigth,
          [styles.small]: small,
        })}
        {...inputProps}
      />
      <span className={clsx(styles.fieldset, error && styles.error)} />
    </div>
  );
};
