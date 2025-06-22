"use client";

import { useUserStore } from "@/feature/user/user.store";
import { RedLoginButton } from "@/shared/components/parts/header/RedLoginButton/RedLoginButton";
import { ButtonCopy } from "@/shared/components/ui/ButtonCopy/ButtonCopy";
import { PRIVATE_PAGES } from "@/shared/dashboard/private.dashboard";
import { CONFIG } from "@/shared/model/config";
import { useModalStore } from "@/shared/stores/modal.store";
import { IModal } from "@/shared/typing/modal.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Dialog } from "../../../ui/Dialog/Dialog";
import styles from "./ReferalPopup.module.css";

export const ReferalPopup: FC<IModal> = ({ id }) => {
  const { modals, closeModal } = useModalStore();
  const modal = modals[id];
  const { user } = useUserStore();

  const handleClick = () => {
    closeModal(id);
  };

  return (
    <Dialog
      open={modal.open}
      id={id}
      isClosing={modal.isClosing}
      contentClassName={styles.pg}
      closeOutside
    >
      <div className={styles.root}>
        <Image
          src="/images/referalpopup.png"
          alt="alt"
          width={433}
          height={612}
          className={styles.image}
        />
        {user && (
          <div className={styles.box}>
            <ButtonCopy
              copyText={CONFIG.APP_BASE_URL + `?ref=${user.ref}`}
              className={styles.copy}
            />
            <p className={styles.text}>
              Вы всегда можете найти реферальную ссылку в Вашем{" "}
              <Link
                href={PRIVATE_PAGES.REFERAL.slug}
                className={styles.red}
                onClick={handleClick}
              >
                личном кабинете
              </Link>
            </p>
          </div>
        )}
        {!user && (
          <div className={styles.box}>
            <p className={styles.text}>
              Для участия Вам необходмо войти через Steam и забрать реферальную
              ссылку в личном кабинете
            </p>
            <RedLoginButton />
          </div>
        )}
      </div>
    </Dialog>
  );
};
