
import Image from "next/image";
import { FC } from "react";
import styles from "./AllBalancebg.module.css";

interface IAllBalanceBg {
  image: string;
}

export const AllbalanceBg: FC<IAllBalanceBg> = ({ image }) => {

  return (
    <Image
      src={image}
      width={184}
      height={184}
      alt={'bg'}
      className={styles.root}
    />
  );
};
