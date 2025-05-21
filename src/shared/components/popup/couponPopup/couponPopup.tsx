"use client";

import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../../ui/Button/Button";

import { IconClose } from "../../ui/svg/IconClose";
import styles from "./couponPopup.module.css";

export const CouponPopup: FC<TDiv> = () => {
  

  return (
    <div  className={clsx(styles.root)}>
      <div className={styles.container}>
        <IconClose
          className={styles.close}
         
        />
        <Image
          src="/images/promopopup.webp"
          alt="alt"
          width={433}
          height={612}
          className={styles.image}
        />
        <p className={styles.title}>12SFDSFG2353DFSDF$23</p>
        <Button size="small" variant="primary" className={styles.button}>
          Скопировать КОД
        </Button>
      </div>
    </div>
  );
};
