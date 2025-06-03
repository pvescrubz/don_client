"use client";

import { useAuthStore } from "@/feature/auth/auth.store";
import { Button } from "@/shared/components/ui/Button/Button";
import { IconCartSmall } from "@/shared/components/ui/svg/IconCartSmall";
import { useModalStore } from "@/shared/stores/popup.store";
import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./AddCartBtn.module.css";

interface IAddCartBtn extends TButton {
  id: string;
}

export const AddCartBtn: FC<IAddCartBtn> = ({ id, className, ...rest }) => {
  const { setOpenModal } = useModalStore();
  const { isAuth } = useAuthStore();
  const handleClick = () => {
    if (!isAuth) {
      setOpenModal("AuthPopup", true);
      return;
    }

    console.log(id);
  };

  return (
    <Button
      className={clsx(styles.root, className)}
      size="small"
      variant="secondary"
      onClick={handleClick}
      {...rest}
    >
      <IconCartSmall className={styles.svg} />В коризу
    </Button>
  );
};
