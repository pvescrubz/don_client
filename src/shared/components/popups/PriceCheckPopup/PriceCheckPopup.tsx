"use client";
import { useStopScroll } from "@/shared/hooks/useStopScroll";
import { useModalStore } from "@/shared/stores/popup.store";
import clsx from "clsx";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";

import { PriceCheckForm } from "../../forms/FriceCheckForm/PriceCheckForm";
import { IconClose } from "../../ui/svg/IconClose";
import styles from "./PriceCheckPopup.module.css";

export const PriceCheckPopup: FC = () => {
  const [modalStore, setOpenModal] = useModalStore((state) => [
    state.modals.PriceCheckPopup,
    state.setOpenModal,
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  const close = () => {
    if (modalStore.open) {
      setOpenModal("PriceCheckPopup", false);
    }
  };

  const reject = () => {
    close();
  };

  // 🔁 Объединяем все эффекты в один useEffect
useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const current = containerRef.current;

      if (current && !current.contains(target)) {
        reject();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, );

  // 🚫 Блокировка скролла
  useStopScroll(modalStore.open, "PriceCheckPopup");

  return (
    <div  className={clsx(styles.root, modalStore.open && styles.visible)}>
      <div ref={containerRef} className={styles.container}>
          <button className={styles.closeButton} onClick={reject}>
            <IconClose className={styles.close} />
          </button>
        <div className={styles.content}>
          <Image src="/images/pricecheckpopup.png" alt="alt" width={80} height={80} className={styles.image} />
          <p className={styles.text}>Гарантия лучшей цены</p>
          <p className={styles.text_small}>
            Мы уверены, что предлагаем самые выгодные условия на рынке. Если вы найдёте скин дешевле — мы предложим вам ту же цену со скидкой!
          </p>
          <PriceCheckForm onClose={reject} />
        </div>
      </div>
    </div>
  );
};