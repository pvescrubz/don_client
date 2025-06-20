"use client";

import { PRIVATE_PAGES } from "@/shared/dashboard/private.dashboard";
import { useModalStore } from "@/shared/stores/modal.store";
import { IModal } from "@/shared/typing/modal.type";
import Image from "next/image";
import { FC } from "react";
import { Baner } from "../../../ui/Baner/Baner";
import { ButtonLink } from "../../../ui/Button/ButtonLink";
import styles from "./BonusBaner.module.css";

export const BonusBaner: FC<IModal> = ({ id }) => {
  const { modals } = useModalStore();

  const modal = modals[id];

  return (
    <Baner open={modal.open} id={id}>
      <div className={styles.root}>
        <Image
          src="/images/procentpopup.png"
          alt="alt"
          width={80}
          height={80}
          className={styles.image}
          quality={100}
        />
        <p className={styles.title}>УСПЕЙ ПОЛУЧИТЬ БОНУС</p>
        <p className={styles.text}>
          Пополни свой лицевой счет прямо сейчас и получи 2% в виде бонуса на
          свой счет!
        </p>
        <ButtonLink
          href={PRIVATE_PAGES.ACCOUNT_BALANCE.slug}
          size="normal"
          variant="primary"
          className={styles.button}
        >
          ПОЛУЧИТЬ
        </ButtonLink>
      </div>
    </Baner>
  );
};
