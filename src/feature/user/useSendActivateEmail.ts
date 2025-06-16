"use client";

import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { userService } from "./user.service";

export const useSendActivateEmail = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["sendActivateEmail"],
    mutationFn: () => userService.sendActivateEmail(),
    onSuccess: () => {
      toast.success("Письмо с активацией отправлено на вашу почту!");
    },
    onError: (error) => {
      toast.error("При отправке письма произошла ошибка!");
      console.error(error.message || "Ошибка при отправке письма");
    },
  });

  return { send: mutate, sendIsPending: isPending };
};
