"use client";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { useModalStore } from "@/shared/stores/popup.store";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { ButtonLink } from "../../ui/Button/ButtonLink";
import { IconClose } from "../../ui/svg/IconClose";
import styles from "./BonusPopup.module.css";

export const BonusPopup: FC<TDiv> = () => {
  const [modalStore, setOpenModal] = useModalStore((state) => [
    state.modals.BonusPopup,
    state.setOpenModal,
  ]);

  const close = () => {
    if (modalStore.open) {
      setOpenModal("BonusPopup", false);
    }
  };

  const reject = () => {
    close();
  };

  return (
    <div className={clsx(styles.root)}>
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={reject}>
          <IconClose className={styles.close} />
        </button>
        <Image
          src="/images/procentpopup.png"
          alt="alt"
          width={80}
          height={80}
          className={styles.image}
        />
        <p className={styles.title}>УСПЕЙ ПОЛУЧИТЬ БОНУС</p>
        <p className={styles.text}>
          Пополни свой лицевой счет от 10 000 ₽ прямо сейчас и получи 10% в виде
          бонуса на свой счет!
        </p>
        <ButtonLink
          href={APP_PAGES.BALANCE_STEAM.slug}
          size="small"
          variant="primary"
          className={styles.button}
        >
          ПОЛУЧИТЬ
        </ButtonLink>
      </div>
    </div>
  );
};
