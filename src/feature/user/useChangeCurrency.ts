"use client";

import { useMutation } from "@tanstack/react-query";

import { userService } from "./user.service";
import { useUserStore } from "./user.store";

export const useChangeCurrency = () => {
  const { setUser } = useUserStore();

  const { mutate, isPending } = useMutation({
    mutationKey: ["selectedCurrency"],
    mutationFn: () => userService.changeCurrency(),
    onSuccess: (data) => {
      setUser(data);
    },
    onError: (error) => {
      console.error(error.message || "Ошибка при смене валюты");
    },
  });

  return { change: mutate, clearIsPending: isPending };
};
