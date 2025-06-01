import { ISpecificallyField } from "@/feature/skins/skins.type";
import { FC } from "react";
import styles from "./SkinСharacteristics.module.css";

interface ISkinСharacteristics {
  info: ISpecificallyField[];
}

export const SkinСharacteristics: FC<ISkinСharacteristics> = ({ info }) => {
  return (
    <>
      {info && (
        <div className={styles.root}>
          <p className={styles.title}>Характеристики скина</p>

          <ul className={styles.list}>
            {info.filter(Boolean).map((item) => (
              <li key={item.id} className={styles.item}>
                <span>{item.groupName}</span>
                <span>{!item.ruName ? item.name : item.ruName}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
