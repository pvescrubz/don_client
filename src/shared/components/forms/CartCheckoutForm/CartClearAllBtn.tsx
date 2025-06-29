"use client";
import { useClearCart } from "@/feature/cart/useClearCart";
import { Button } from "@/shared/components/ui/Button/Button";
import { FC } from "react";

export const CartClearAllBtn: FC = () => {
  const { clear, clearIsPending } = useClearCart();

  const handleClick = () => {
    clear();
  };

  return (
    <Button
      variant="secondary"
      size="small"
      onClick={handleClick}
      disabled={clearIsPending}
    >
      Очистить корзину
    </Button>
  );
};
