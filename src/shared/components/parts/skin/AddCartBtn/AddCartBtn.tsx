"use client";

import { Button } from "@/shared/components/ui/Button/Button";
import { IconCartSmall } from "@/shared/components/ui/svg/IconCartSmall";
import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./AddCartBtn.module.css";

interface IAddCartBtn extends TButton {
  id: string;
}

export const AddCartBtn: FC<IAddCartBtn> = ({ id, className, ...rest }) => {
  const handleClick = () => {
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
