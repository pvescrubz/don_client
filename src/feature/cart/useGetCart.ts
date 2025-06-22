"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { cartService } from "./cart.service";
import { useCartStore } from "./cart.store";


export const useGetCart = () => {
  const { cartIds, addToCart, removeFromCart } = useCartStore();

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => cartService.getCart(),
    refetchInterval: 15 * 60 * 1000,
    staleTime: 0,
  });

  useEffect(() => {
    if (cart?.skins?.length !== undefined && !isLoading) {
      const serverIds = cart.skins.map((item) => item.id);

      const toRemove = cartIds.filter((id) => !serverIds.includes(id));
      const toAdd = serverIds.filter((id) => !cartIds.includes(id));

      if (toRemove.length > 0) {
        toRemove.forEach((id) => removeFromCart(id));
      }

      if (toAdd.length > 0) {
        toAdd.forEach((id) => addToCart(id));
      }
    }
  }, [addToCart, cart, cartIds, isLoading, removeFromCart]);

  return {
    cart,
    isLoading,
  };
};
