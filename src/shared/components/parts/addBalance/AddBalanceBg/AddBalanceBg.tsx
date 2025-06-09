import Image from "next/image";
import { FC } from "react";
import styles from "./AddBalanceBg.module.css";

interface IAddBalanceBg {
  image: string;
}

export const AddBalanceBg: FC<IAddBalanceBg> = ({ image }) => {
  return (
    <Image
      src={image}
      width={184}
      height={184}
      alt={"bg"}
      className={styles.root}
    />
  );
};
