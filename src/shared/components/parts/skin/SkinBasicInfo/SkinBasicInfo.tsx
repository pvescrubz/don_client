import { FC } from "react";
import styles from "./SkinBasicInfo.module.css";

interface ISkinBasicInfo {
  name: string;
  quality?: string;
  rarity?: string;
}

export const SkinBasicInfo: FC<ISkinBasicInfo> = ({
  name,
  quality,
  rarity,
}) => {
  return (
    <div className={styles.root}>
      {quality && <p>{quality}</p>}
      <p className={styles.name}>{name}</p>
      {rarity && <p>{rarity}</p>}
    </div>
  );
};
