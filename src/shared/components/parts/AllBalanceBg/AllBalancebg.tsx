import { TGamePlatform } from "@/shared/lib/platorms.config";
import Image from "next/image";
import { FC } from "react";
import styles from "./AllBalancebg.module.css";

interface IAllBalanceBg {
  platform: TGamePlatform;
}

export const Allbalancebg: FC<IAllBalanceBg> = ({ platform }) => {
  const { sectionbgimage } = platform;
  return (
    <Image
      src={sectionbgimage}
      width={130}
      height={150}
      alt={sectionbgimage}
      className={styles.bg}
    />
  );
};
