"use client";

import { useModalStore } from "@/shared/stores/modal.store";
import { IModal } from "@/shared/typing/modal.type";
import Image from "next/image";
import { FC } from "react";

import { useUserStore } from "@/feature/user/user.store";
import { Button } from "@/shared/components/ui/Button/Button";
import { PRIVATE_PAGES } from "@/shared/dashboard/private.dashboard";
import { redirect } from "next/navigation";
import { Dialog } from "../../../ui/Dialog/Dialog";
import styles from "./EmailOrTradeUrlPopup.module.css";

export const EmailOrTradeUrlPopup: FC<IModal> = ({ id }) => {
  const { modals, closeModal } = useModalStore();
  const { user, isActivated } = useUserStore();

  const modal = modals[id];
  const handleClick = async () => {
    closeModal(id);
    redirect(PRIVATE_PAGES.ACCOUNT_BALANCE.slug);
  };

  return (
    <Dialog open={modal.open} isClosing={modal.isClosing} id={id} >
      <div className={styles.container}>
        <Image
          src="/images/alert_button.png"
          alt="alt"
          width={44}
          height={44}
          className={styles.image}
          quality={100}
        />
        <p className={styles.text}>
          {!isActivated() && !user?.steamTradeUrl && (
            <>Добавьте Trade Url и подтвердите Email</>
          )}
          {!isActivated() && <>Подтвердите Email</>}
          {!user?.steamTradeUrl && <>Добавьте Trade Url</>}, чтобы соврешить
          покупку
        </p>
        <p className={styles.text_small}>
          Перейдите по ссылке ниже, чтобы перейти в личный кабинет.
        </p>

        <Button className={styles.button} onClick={handleClick}>
          Личный кабинет
        </Button>
      </div>
    </Dialog>
  );
};
