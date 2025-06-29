import clsx from "clsx";
import { FC } from "react";
import { SPEED_DEAL } from "../speed-deal.config";
import { SpeedDialItem } from "../SpeedDialListItem/SpeedDialItem";
import styles from "./SpeedDialList.module.css";

interface ISpeedDialList {
  show: boolean;
}

export const SpeedDialList: FC<ISpeedDialList> = ({ show }) => {
  const items = SPEED_DEAL;

  return (
    <ul className={clsx(styles.root, show && styles.show)}>
      {items.map((item, index) => (
        <SpeedDialItem
          key={index}
          index={index}
          itemContent={item}
          show={show}
        />
      ))}
    </ul>
  );
};
