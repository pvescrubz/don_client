"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useCartStore } from "@/shared/stores/cart.store";
import { cartService } from "./cart.service";

export const useAddToCart = (skinId: string) => {
  const { addToCart } = useCartStore();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["cart"],
    mutationFn: () => cartService.addToCart(skinId),
    onSuccess: (newCartData) => {
      toast.success("Товар добавлен в корзину!");
      addToCart(skinId);
      queryClient.setQueryData(["cart"], newCartData);
    },
    onError: (error) => {
      toast.error(error.message || "Ошибка при выходе из системы");
    },
  });

  return { add: mutate, addIsPending: isPending };
};
