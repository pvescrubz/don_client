import clsx from "clsx";
import { FC } from "react";

import { TButton } from "@/shared/typing/elements.type";
import { IconMessage } from "../../svg/IconMessage";
import styles from "./SpeedDialButton.module.css";

interface ISpeedDialButton extends TButton {
  show: boolean;
}

export const SpeedDialButton: FC<ISpeedDialButton> = ({ show, ...rest }) => {
  return (
    <button className={clsx(styles.root, !show && styles.animate)} {...rest}>
      <IconMessage className={styles.icon} />
      <span className={clsx(styles.close, show && styles.show)} />
    </button>
  );
};
