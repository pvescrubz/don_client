"use client";

import { CONFIG } from "@/shared/model/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { PAYMENT_METHOD } from "../orders/orders.type";
import { checkoutService } from "./checkout.service";
import { ICheckoutData } from "./checkout.type";

export const useCheckout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["checkout"],
    mutationFn: (data: ICheckoutData) => checkoutService.checkout(data),
    onSuccess: (data, variables) => {
      const { paymentMethod } = variables;

      if (paymentMethod === PAYMENT_METHOD.ACCUNT_BALANCE && data.success) {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
        queryClient.invalidateQueries({ queryKey: ["user"] });

        toast.success(
          "Покупка прошла успешно. Подтверждение отправлено Вам на почту"
        );
        router.push(CONFIG.APP_BASE_URL + "/checkout/success");
      }

      if (paymentMethod === PAYMENT_METHOD.SBP && data.payment_url) {
        router.push(data.payment_url);
      }
    },
    onError: (error) => {
      toast.error(error.message || "Ошибка при оплате");
      console.error(error.message || "Ошибка при оплате");
    },
  });

  return { checkout: mutate, checkoutIsPending: isPending };
};
