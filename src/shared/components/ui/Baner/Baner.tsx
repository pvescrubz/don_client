import { useModalStore } from "@/shared/stores/modal.store";
import { TDiv } from "@/shared/typing/elements.type";
import { TModalId } from "@/shared/typing/modal.type";
import clsx from "clsx";
import { FC, useCallback, useEffect, useState } from "react";
import { IconClose } from "../svg/IconClose";
import styles from "./Baner.module.css";

interface IBaner extends TDiv {
  open: boolean;
  id: TModalId;
  isClosing: boolean;
}

export const Baner: FC<IBaner> = ({
  children,
  open,
  id,
  isClosing,
  className,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const { finalizeCloseModal } = useModalStore();

  const close = useCallback(() => {
    setShow(false);

    setTimeout(() => {
      finalizeCloseModal(id);
    }, 400);
  }, [finalizeCloseModal, id]);

  useEffect(() => {
    if (isClosing) {
      close();
    }
  }, [close, isClosing]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setShow(true);
      });
    }
    if (!open) {
      close();
    }
  }, [close, open]);

  return (
    <>
      <div
        className={clsx(styles.root, className, show && styles.open)}
        {...rest}
      >
        <div className={clsx(styles.content, "scrollbar")}>
          <button className={styles.close} onClick={close}>
            <IconClose />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
