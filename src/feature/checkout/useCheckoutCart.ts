"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { checkoutService } from "./checkout.service";
import { ICheckoutData } from "./checkout.type";

export const useCheckout = () => {
  // const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["checkout"],
    onMutate: (data: ICheckoutData) => {
      const { paymentMethod } = data;
      return { paymentMethod };
    },
    mutationFn: (data: ICheckoutData) => checkoutService.checkout(data),
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "Покупка прошла успешно. Подтверждение отправлено Вам на почту"
      );
    },
    onError: (error) => {
      toast.error(error.message || "Ошибка при оплате");
      console.error(error.message || "Ошибка при оплате");
    },
  });

  return { checkout: mutate, checkoutIsPending: isPending };
};
