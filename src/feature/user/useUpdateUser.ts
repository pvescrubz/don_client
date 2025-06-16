"use client";

import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { userService } from "./user.service";
import { useUserStore } from "./user.store";
import { IUpdateData, IUser } from "./user.type";

export const useUpdateUser = () => {
  const { setUser } = useUserStore();

  const { mutate, isPending } = useMutation({
    mutationKey: ["updateUser"],
    mutationFn: (data: IUpdateData) => userService.update(data),
    onSuccess: (data: IUser) => {
      toast.success("Успешное обновление профиля!");
      setUser(data);
    },
    onError: (error) => {
      toast.error(error.message || "Ошибка при обновлении профиля!");
      console.error(error.message || "Ошибка при обновлении профиля!");
    },
  });

  return { update: mutate, updateIsPending: isPending };
};
