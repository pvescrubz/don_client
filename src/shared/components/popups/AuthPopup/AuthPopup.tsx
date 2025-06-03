"use client";
import { useStopScroll } from "@/shared/hooks/useStopScroll";
import { useModalStore } from "@/shared/stores/popup.store";
import clsx from "clsx";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import { LoginButton } from "../../parts/LoginButton/LoginButton";
import { IconClose } from "../../ui/svg/IconClose";
import styles from "./AuthPopup.module.css";

export const AuthPopup: FC = () => {
  const [modalStore, setOpenModal] = useModalStore((state) => [
    state.modals.AuthPopup,
    state.setOpenModal,
  ]);

  useStopScroll(modalStore.open, "AuthPopup");

  const containerRef = useRef<HTMLDivElement>(null);

  const close = () => {
    if (modalStore.open) {
      setOpenModal("AuthPopup", false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const current = containerRef.current;

      if (current && !current.contains(target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={clsx(styles.root, modalStore.open && styles.visible)}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.top}>
          <p className={styles.title}>Необходима авторизация</p>
          <button className={styles.closeButton} onClick={close}>
            <IconClose className={styles.close} />
          </button>
        </div>

        <div className={styles.content}>
          <Image
            src="/images/alert_button.png"
            alt="alt"
            width={44}
            height={44}
            className={styles.image}
          />
          <p className={styles.text}>Войдите, чтобы продолжить</p>
          <p className={styles.text_small}>
            Войдите через свой профиль Steam, чтобы продолжить работу с сайтом
          </p>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};
