"use client";
import { useToggleCart } from "@/feature/cart/useToggleCart";
import { useProtectedAction } from "@/shared/hooks/useProtectedAction";
import { TButton } from "@/shared/typing/elements.type";
import { FC } from "react";
import { IconCartSmall } from "../svg/IconCartSmall";
import { IconDelete } from "../svg/IconDelete";

interface IProductCardBtn extends TButton {
  skinId: string;
}

export const ProductCardBtn: FC<IProductCardBtn> = ({
  skinId,
  className,
  ...rest
}) => {
  const { inCart, toggle } = useToggleCart(skinId);
  const { withAuthCheck } = useProtectedAction();

  const handleClick = () => {
    withAuthCheck(() => {
      toggle();
      return skinId;
    });
  };

  return (
    <button className={className} onClick={handleClick} {...rest}>
      {!inCart && (
        <>
          <IconCartSmall /> В корзину
        </>
      )}
      {inCart && (
        <>
          <IconDelete /> Из корзины
        </>
      )}
    </button>
  );
};

export default ProductCardBtn;
