"use client";

import { useModalStore } from "@/shared/stores/modal.store";
import { IModal } from "@/shared/typing/modal.type";
import Image from "next/image";
import { FC } from "react";
import { SubscrForm } from "../../../forms/SubscrForm/SubscrForm";
import { Baner } from "../../../ui/Baner/Baner";
import styles from "./SubscriptionBaner.module.css";

export const SubscriptionBaner: FC<IModal> = ({ id }) => {
  const { modals } = useModalStore();

  const modal = modals[id];

  return (
    <Baner open={modal.open} id={id}>
      <div className={styles.root}>
        <Image
          src="/images/heroicon2.png"
          alt="alt"
          width={80}
          height={80}
          className={styles.image}
        />
        <p className={styles.title}>ПОДПИШИСЬ</p>
        <p className={styles.text}>
          и получай лучшие предложение раньше остальных
        </p>

        <SubscrForm />
      </div>
    </Baner>
  );
};
