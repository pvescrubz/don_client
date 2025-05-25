// src/components/modals/BonusPopup/BonusPopup.tsx
"use client";
import { useModalStore } from "@/shared/stores/popup.store";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { SubscrForm } from "../../forms/subscrForm/SubscrForm";
import { IconClose } from "../../ui/svg/IconClose";
import styles from "./SubscriptionPopup.module.css";



export const SubscriptionPopup: FC<TDiv> = ({
}) => {

  const [modalStore, setOpenModal] = useModalStore((state) => [
    state.modals.SubscriptionPopup,
    state.setOpenModal,
  ]);

  const close = () => {
    if (modalStore.open) {
      setOpenModal("SubscriptionPopup", false);
    }
  };

  const reject = () => {
    close();
  };

  return (
    <div className={clsx(styles.root)}>
      <div className={styles.container}>
        <button className={styles.closeButton} onClick={reject}>
          <IconClose className={styles.close}/>
        </button>
        <Image
          src="/images/subscriptionpopup.png"
          alt="alt"
          width={80}
          height={80}
          className={styles.image}
        />
        <p className={styles.title}>ПОДПИШИСЬ</p>
        <p className={styles.text}>
         и получай лучшие предложение раньше остальных
        </p>
        <SubscrForm onClose={reject} />
      </div>
    </div>
  );
};