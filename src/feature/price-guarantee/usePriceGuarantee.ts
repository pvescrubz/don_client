"use client";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { priceGuaranteeService } from "./price-guarantee.service";
import { IPriceGuaranteeData } from "./price-guarantee.type";

export const usePriceGuarantee = () => {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["price_guarantee"],
    mutationFn: (data: IPriceGuaranteeData) => priceGuaranteeService.send(data),
    onSuccess: () => {
      toast.success("Ваша заявка отправлена!");
    },
    onError: (error) => {
      console.error(error.message || "Ошибка при отправке");
      toast.error(error.message || "Ошибка при отправке");
    },
  });

  return {
    sendAnApplication: mutate,
    sendAnApplicationIsPending: isPending,
    sendAnApplicationIsSuccess: isSuccess,
  };
};
