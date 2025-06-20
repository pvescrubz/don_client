import { useStopScroll } from "@/shared/hooks/useStopScroll";
import { useModalStore } from "@/shared/stores/modal.store";
import { TModalId } from "@/shared/typing/modal.type";
import clsx from "clsx";
import {
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { MyToaster } from "../MyToaster/MyToaster";
import { IconClose } from "../svg/IconClose";
import styles from "./Dialog.module.css";

interface IDialog extends HTMLAttributes<HTMLDialogElement> {
  open: boolean;
  id: TModalId;
  contentClassName?: string;
  closeOutside?: boolean;
  isClosing?: boolean;
}

export const Dialog: FC<IDialog> = ({
  children,
  open,
  id,
  className,
  contentClassName,
  isClosing,
  closeOutside = false,
  ...rest
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [show, setShow] = useState(false);
  const { finalizeCloseModal } = useModalStore();
  const { setAnyDialogOpen } = useModalStore();

  useStopScroll(show, id);

  const close = useCallback(() => {
    if (dialogRef.current) {
      setShow(false);
      setAnyDialogOpen(false);

      setTimeout(() => {
        dialogRef.current?.close();
        finalizeCloseModal(id);
      }, 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalizeCloseModal, id]);

  useEffect(() => {
    if (open && dialogRef.current) {
      setShow(true);
      dialogRef.current.showModal();
      setAnyDialogOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (isClosing) {
      close();
    }
  }, [close, isClosing]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };

    if (show) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, show]);

  return (
    <>
      <dialog
        ref={dialogRef}
        className={clsx(styles.root, className, show && styles.open)}
        {...rest}
      >
        {closeOutside && (
          <button className={styles.close} onClick={close}>
            <IconClose />
          </button>
        )}
        <div className={clsx(styles.content, "scrollbar", contentClassName)}>
          {!closeOutside && (
            <button className={styles.close} onClick={close}>
              <IconClose />
            </button>
          )}

          {children}
        </div>
        <div className={styles.backdrop} onClick={close} />
        {show && <MyToaster />}
      </dialog>
    </>
  );
};
