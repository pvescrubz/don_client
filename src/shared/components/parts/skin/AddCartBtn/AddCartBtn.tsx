"use client";

import { Button } from "@/shared/components/ui/Button/Button";
import { IconCartSmall } from "@/shared/components/ui/svg/IconCartSmall";
import { IconDelete } from "@/shared/components/ui/svg/IconDelete";
import { useProtectedAction } from "@/shared/hooks/useProtectedAction";
import { useToggleCart } from "@/shared/hooks/useToggleCart";
import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./AddCartBtn.module.css";

interface IAddCartBtn extends TButton {
  skinId: string;
}

export const AddCartBtn: FC<IAddCartBtn> = ({ skinId, className, ...rest }) => {
  const { inCart, toggle, isLoading } = useToggleCart(skinId);
  const { withAuthCheck } = useProtectedAction();

  const handleClick = () => {
    withAuthCheck(() => {
      toggle();
    });
  };

  return (
    <Button
      className={clsx(styles.root, className)}
      size="small"
      variant="secondary"
      onClick={handleClick}
      {...rest}
      disabled={isLoading}
    >
      {!inCart && (
        <>
          <IconCartSmall className={styles.svg} /> В корзину
        </>
      )}
      {inCart && (
        <>
          <IconDelete className={styles.svg} /> Из корзины
        </>
      )}
    </Button>
  );
};
