"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useCartStore } from "@/feature/cart/cart.store";
import { cartService } from "./cart.service";

export const useRemoveFormCart = (skinId: string) => {
  const { removeFromCart } = useCartStore();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["cart"],
    mutationFn: () => cartService.removeToCart(skinId),
    onSuccess: (newCartData) => {
      toast.success("Товар удален из корзины!");
      removeFromCart(skinId);
      queryClient.setQueryData(["cart"], newCartData);
    },
    onError: (error) => {
      toast.error(error.message || "Ошибка при выходе из системы");
    },
  });

  return { remove: mutate, removeIsPending: isPending };
};
