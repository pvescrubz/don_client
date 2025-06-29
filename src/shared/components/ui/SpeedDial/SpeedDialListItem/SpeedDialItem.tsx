import clsx from "clsx";
import { FC } from "react";

import styles from "./SpeedDialItem.module.css";
import { TSpeedDialItem } from "./speedDialItem.type";

interface ISpeedDialItem {
  show: boolean;
  index: number;
  itemContent: TSpeedDialItem;
}

export const SpeedDialItem: FC<ISpeedDialItem> = ({
  index,
  itemContent,
  show,
}) => {
  const { icon, tooltip, href, type } = itemContent;
  return (
    <li
      key={index}
      className={clsx(styles.root, show && styles.show)}
      style={{ transitionDelay: `${index * 30}ms` }}
    >
      <a
        href={type === "tel" ? "tel:" + href : href}
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles.button}>{icon}</span>
        <span className={styles.tooltip}>{tooltip}</span>
      </a>
    </li>
  );
};
