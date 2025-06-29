import { FC } from "react";
import styles from "./SkinDescr.module.css";

interface ISkinDescr {
  descr: string[];
}

export const SkinDescr: FC<ISkinDescr> = ({ descr }) => {
  return (
    <>
      {descr && (
        <div className={styles.root}>
          <p className={styles.title}>Описание</p>

          {descr.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </>
  );
};
