"use client";
import { useModalStore } from "@/shared/stores/modal.store";
import { IModal } from "@/shared/typing/modal.type";
import Image from "next/image";
import { FC } from "react";

import { PriceGuaranteeForm } from "@/shared/components/forms/PriceGuaranteeForm/PriceGuaranteeForm";
import { Dialog } from "../../../ui/Dialog/Dialog";
import styles from "./PriceGuaranteePopup.module.css";

export const PriceGuaranteePopup: FC<IModal> = ({ id }) => {
  const { modals } = useModalStore();

  const modal = modals[id];

  return (
    <Dialog open={modal.open} isClosing={modal.isClosing} id={id}>
      <div className={styles.content}>
        <Image
          src="/images/pricecheckpopup.png"
          alt="alt"
          width={80}
          height={80}
          className={styles.image}
        />
        <p className={styles.text}>Гарантия лучшей цены</p>
        <p className={styles.text_small}>
          Мы уверены, что предлагаем самые выгодные условия на рынке. Если вы
          найдёте скин дешевле — мы предложим вам ту же цену со скидкой!
        </p>
        <PriceGuaranteeForm />
      </div>
    </Dialog>
  );
};
