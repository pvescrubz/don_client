import { useAddToCart } from "@/feature/cart/useAddToCart";
import { useRemoveFormCart } from "@/feature/cart/useRemoveFromCart";
import { useCartStore } from "@/shared/stores/cart.store";
import { useEffect, useState } from "react";

export const useToggleCart = (skinId: string) => {
  const { add, addIsPending } = useAddToCart(skinId);
  const { remove, removeIsPending } = useRemoveFormCart(skinId);
  const { cartIds, isInCart } = useCartStore();

  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setInCart(isInCart(skinId));
  }, [cartIds, isInCart, skinId]);

  const toggle = () => {
    if (!inCart) {
      add();
    } else {
      remove();
    }
  };

  return {
    inCart,
    toggle,
    isLoading: addIsPending || removeIsPending,
  };
};
