"use client";

import { useModalStore } from "@/shared/stores/modal.store";
import { IModal } from "@/shared/typing/modal.type";
import Image from "next/image";
import { FC } from "react";
import { LoginButton } from "../../../parts/header/LoginButton/LoginButton";
import { Dialog } from "../../../ui/Dialog/Dialog";
import styles from "./AuthPopup.module.css";

export const AuthPopup: FC<IModal> = ({ id }) => {
  const { modals } = useModalStore();

  const modal = modals[id];

  return (
    <Dialog open={modal.open} id={id}>
      <p className={styles.title}>Необходима авторизация</p>
      <div className={styles.container}>
        <Image
          src="/images/alert_button.png"
          alt="alt"
          width={44}
          height={44}
          className={styles.image}
          quality={100}
        />
        <p className={styles.text}>Войдите, чтобы продолжить</p>
        <p className={styles.text_small}>
          Войдите через свой профиль Steam, чтобы продолжить работу с сайтом
        </p>

        <LoginButton />
      </div>
    </Dialog>
  );
};
