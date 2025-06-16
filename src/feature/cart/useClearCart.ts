"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useCartStore } from "@/feature/cart/cart.store";
import { cartService } from "./cart.service";

export const useClearCart = () => {
  const { clearCart } = useCartStore();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["cart"],
    mutationFn: () => cartService.clearCart(),
    onSuccess: (newCartData) => {
      toast.success("Корзина очищена!");
      clearCart();
      queryClient.setQueryData(["cart"], newCartData);
    },
    onError: (error) => {
      toast.error(error.message || "Ошибка при выходе из системы");
    },
  });

  return { clear: mutate, clearIsPending: isPending };
};
