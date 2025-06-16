'use client'

import { useCartStore } from "@/feature/cart/cart.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { cartService } from "./cart.service";

export const useGetCart = () => {
  const { addToCart } = useCartStore();
  const didSyncRef = useRef(false);

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => cartService.getCart(),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (!didSyncRef.current && cart?.skins?.length && !isLoading) {
      cart.skins.forEach((item) => addToCart(item.id));
      didSyncRef.current = true;
    }
  }, [addToCart, cart, isLoading]);
  
  return {
    cart,
    isLoading,
  };
};
