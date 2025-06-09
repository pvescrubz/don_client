"use client";

import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
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
            Пополни свой лицевой счет от 10 000 ₽ прямо сейчас и получи 10% в
            виде бонуса на свой счет!
          </p>
          <ButtonLink
            href={APP_PAGES.BALANCE_STEAM.slug}
            size="large"
            variant="primary"
            className={styles.button}
          >
            ПОЛУЧИТЬ
          </ButtonLink>
 
      </div>
    </Baner>
  );
};
