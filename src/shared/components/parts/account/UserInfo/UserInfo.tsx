"use client";

import { useUserStore } from "@/feature/user/user.store";

import { EmailForm } from "@/shared/components/forms/EmailForm/EmailForm";
import { TradeUrlForm } from "@/shared/components/forms/TradeUrlForm/TradeUrlForm";
import { FormatedPrice } from "@/shared/lib/FormatedPrice";
import clsx from "clsx";
import Image from "next/image";
import styles from "./UserInfo.module.css";

export const UserInfo = () => {
  const { user } = useUserStore();

  if (!user) return null;
  const { steamAvatar, name, balance } = user;

  return (
    <div className={styles.root}>
      <div className={styles.img_box}>
        <Image
          src={steamAvatar ? steamAvatar : "/images/don.png"}
          alt={"user"}
          width={140}
          height={140}
          quality={100}
          className={styles.img}
        />
      </div>
      <div className={styles.box}>
        <div className={styles.top}>
          <p className={styles.name}>{name ? name : "user"}</p>
          <p className={clsx(styles.name, styles.span)}>
            Баланс:{" "}
            <b>
              <FormatedPrice price={balance} />
            </b>
          </p>
        </div>
        <TradeUrlForm className={styles.span} />
        <EmailForm className={styles.span} />
      </div>
    </div>
  );
};
