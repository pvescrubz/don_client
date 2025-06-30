"use client";
import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import toast from "react-hot-toast";
import { IconCopy } from "../svg/IconCopy";
import styles from "./ButtonCopy.module.css";

interface IButtonCopy extends TButton {
  copyText: string;
}

export const ButtonCopy: FC<IButtonCopy> = ({
  copyText,
  className,
  ...rest
}) => {

  
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      toast.success("Реферальнуя ссылкы скопирована");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  
  return (
    <button
      className={clsx(styles.root, className)}
      onClick={handleClick}
      {...rest}
    >
      <span>Скопировать ссылку</span>
      <IconCopy />
    </button>
  );
};
