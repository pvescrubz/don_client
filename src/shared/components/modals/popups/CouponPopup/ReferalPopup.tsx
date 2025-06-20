"use client";

import { useModalStore } from "@/shared/stores/modal.store";
import { IModal } from "@/shared/typing/modal.type";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../../../ui/Button/Button";
import { Dialog } from "../../../ui/Dialog/Dialog";
import styles from "./ReferalPopup.module.css";

export const ReferalPopup: FC<IModal> = ({ id }) => {
  const { modals } = useModalStore();
  const modal = modals[id];

  const textToCopy = "12SFDSFG2353DFSDF$23";

  return (
    <Dialog open={modal.open} id={id} contentClassName={styles.pg} closeOutside>
      <div className={styles.container}>
        <Image
          src="/images/promopopup.webp"
          alt="alt"
          width={433}
          height={612}
          className={styles.image}
        />
        <p className={styles.code}>{textToCopy}</p>
        <Button size="small" variant="primary" className={styles.button}>
          Скопировать КОД
        </Button>
      </div>
    </Dialog>
  );
};
