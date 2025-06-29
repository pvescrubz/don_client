import { ISpecificallyField } from "@/feature/skins/skins.type";
import { FC } from "react";
import styles from "./SkinСharacteristics.module.css";

interface ISkinСharacteristics {
  characteristics: ISpecificallyField[];
}

export const SkinСharacteristics: FC<ISkinСharacteristics> = ({
  characteristics,
}) => {
  return (
    <>
      {characteristics && (
        <div className={styles.root}>
          <p className={styles.title}>Характеристики скина</p>

          <ul className={styles.list}>
            {characteristics.filter(Boolean).map((item) => (
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
