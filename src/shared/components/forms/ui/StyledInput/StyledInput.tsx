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
  hidden?: boolean;
}

export const StyledInput: FC<IStyledInput> = ({
  InputProps,
  error = false,
  className,
  centred,
  iconLeft,
  iconRigth,
  small,
  hidden,
  ...rest
}) => {
  const uniqueId = useId();

  const { className: inputClassName, ...inputProps } = InputProps;

  return (
    <div className={clsx(styles.root, className, hidden && styles.hidden)} {...rest}>
      {iconLeft && (
        <span className={clsx(styles.icon, styles.icon_left)}>{iconLeft}</span>
      )}
      {iconRigth && (
        <span className={clsx(styles.icon, styles.icon_right)}>
          {iconRigth}
        </span>
      )}

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
      {InputProps.type !== "hidden" && (
        <span className={clsx(styles.fieldset, error && styles.error)} />
      )}
    </div>
  );
};
