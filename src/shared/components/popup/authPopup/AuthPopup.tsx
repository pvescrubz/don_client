"use client";
import { useStopScroll } from "@/shared/hooks/useStopScroll";
import { useModalStore } from "@/shared/stores/popup.store";
import clsx from "clsx";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import { ButtonLink } from "../../ui/Button/ButtonLink";
import { IconClose } from "../../ui/svg/IconClose";
import { IconSteam } from "../../ui/svg/IconSteam";
import styles from "./AuthPopup.module.css";

export const AuthPopup: FC = () => {
  const [modalStore, setOpenModal] = useModalStore((state) => [
    state.modals.AuthPopup,
    state.setOpenModal,
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  const close = () => {
    if (modalStore.open) {
      setOpenModal("AuthPopup", false);
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
  useStopScroll(modalStore.open, "AuthPopup");

  return (
    <div  className={clsx(styles.root, modalStore.open && styles.visible)}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.top}>
          <p className={styles.title}>Необходима авторизация</p>
          <button className={styles.closeButton} onClick={reject}>
            <IconClose className={styles.close} />
          </button>
        </div>

        <div className={styles.content}>
          <Image src="/images/alarm.png" alt="alt" width={44} height={44} className={styles.image} />
          <p className={styles.text}>Войдите, чтобы продолжить</p>
          <p className={styles.text_small}>
            Войдите через свой профиль Steam, чтобы продолжить работу с сайтом
          </p>
          <ButtonLink href="/" size="small" variant="primary" className={styles.button}>
            <IconSteam className={styles.icon} />
            ВОЙТИ ЧЕРЕЗ STEAM
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};