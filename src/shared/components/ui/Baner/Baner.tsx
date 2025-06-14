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
}

export const Baner: FC<IBaner> = ({
  children,
  open,
  id,
  className,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const { closeModal } = useModalStore();

  const close = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      closeModal(id);
    }, 400);
  }, [closeModal, id]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setShow(true);
      }, 10);
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
