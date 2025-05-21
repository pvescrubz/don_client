// src/components/modals/BonusPopup/BonusPopup.tsx
"use client";
import { useModalStore } from "@/shared/stores/popup.store";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { ButtonLink } from "../../ui/Button/ButtonLink";
import { IconClose } from "../../ui/svg/IconClose";
import styles from "./BonusPopup.module.css";

interface BonusPopupProps {
  title?: string;
  minAmount?: number;
  bonusPercent?: number;
}

export const BonusPopup: FC<BonusPopupProps> = ({
}) => {




  const [modalStore, setOpenModal] = useModalStore((state) => [
    state.modals.BonusPopup,
    state.setOpenModal,
  ]);

  const close = () => {
    if (modalStore.open) {
      setOpenModal("BonusPopup", false);
    }
  };

  const resolve = () => {
    modalStore.resolve!();
    close();
  };

  const reject = () => {
    modalStore.reject!();
    close();
  };

  return (
    <div className={clsx(styles.root)}>
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={reject}>
          <IconClose className={styles.close}/>
        </button>
        <Image
          src="/images/procentpopup.png"
          alt="alt"
          width={80}
          height={80}
          className={styles.image}
        />
        <p className={styles.title}>ПОДПИШИСЬ</p>
        <p className={styles.text}>
         и получай лучшие предложение раньше остальных
        </p>
        <ButtonLink
          href="/"
          size="small"
          variant="primary"
          className={styles.button}
          onClick={resolve}
        >
          ПОПОЛНИТЬ СЧЕТ
        </ButtonLink>
      </div>
    </div>
  );
};