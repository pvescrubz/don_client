// CouponPopup.tsx
"use client";

import { useStopScroll } from "@/shared/hooks/useStopScroll";
import { useModalStore } from "@/shared/stores/popup.store";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { Button } from "../../ui/Button/Button";
import styles from "./СouponPopup.module.css";

export const CouponPopup: FC<TDiv> = () => {

  const textToCopy = "12SFDSFG2353DFSDF$23"; // Текст купона


  const [copied, setCopied] = useState(false);

  const [modalStore, setOpenModal] = useModalStore((state) => [
    state.modals.CouponPopup,
    state.setOpenModal,
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  const close = () => {
    if (modalStore.open) {
      setOpenModal("CouponPopup", false);
    }
  };

  const reject = () => {
    modalStore.reject?.(); // безопасный вызов
    close();
  };

  // Закрытие по клику вне области
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
  },);

    const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000); 
    } catch (err) {
      console.error("Не удалось скопировать текст: ", err);
    }
  };

  useStopScroll(modalStore.open, "CouponPopup");
  return (
    <div className={clsx(styles.root, modalStore.open && styles.visible)}>
      <div ref={containerRef} className={styles.container}>
        <Image
          src="/images/promopopup.webp"
          alt="alt"
          width={433}
          height={612}
          className={styles.image}
        />
        <p className={styles.title}>12SFDSFG2353DFSDF$23</p>
        <Button
          size="small"
          variant="primary"
          className={styles.button}
          onClick={handleCopy}
        >
          {copied ? "Скопировано!" : "Скопировать КОД"}
        </Button>
      </div>
    </div>
  );
};