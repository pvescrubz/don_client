'use client';
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { TDiv } from "../../../typing/elements.type";
import { ButtonLink } from "../../ui/Button/ButtonLink";
import { IconClose } from "../../ui/svg/IconClose";
import { IconSteam } from "../../ui/svg/IconSteam";
import styles from "./authPopup.module.css";

export const AuthPopup: FC<TDiv> = () => {
 

  return (
    <div  className={clsx(styles.root)}>
      <div className={styles.container}>
      <div className={styles.top}>
    <p className={styles.title}>Необходима авторизация</p>
      <IconClose className={styles.close} />
      </div>
      <div className={styles.content}>
        <Image src="/images/alarm.png" alt="alt" width={44} height={44} className={styles.image} />
        <p className={styles.text}>Войдите, чтобы продолжить</p>
        <p className={styles.text_small}>Войдите через свой профиль Steam, чтобы продолжить работу с сайтом</p>
        <ButtonLink href="/" size="small" variant="primary" className={styles.button}>
          <IconSteam className={styles.icon} />
          ВОЙТИ ЧЕРЕЗ STEAM</ButtonLink>
      </div>
    </div>
    </div>
  );
};