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
  const { finalizeCloseModal, setAnyBanerOpen } = useModalStore();

  const close = useCallback(() => {
    setShow(false);
    setAnyBanerOpen(false);
    setTimeout(() => {
      finalizeCloseModal(id);
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalizeCloseModal, id]);

  useEffect(() => {
    if (open) {
      setAnyBanerOpen(true);
      setTimeout(() => {
        setShow(true);
      });
    }
    if (!open) {
      close();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
