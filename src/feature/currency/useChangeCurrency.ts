"use client";

import { useCurrencyStore } from "@/shared/stores/currency.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { currencyService } from "./currency.service";

export const useCurrencyRates = () => {
  const { setCurrencyRates } = useCurrencyStore();

  const res = useQuery({
    queryKey: ["currencyRates"],
    queryFn: currencyService.getRates,
    staleTime: 1000 * 60 * 15,
  });

  const { isSuccess, isLoading, data } = res;

  useEffect(() => {
    if (isSuccess && !isLoading && data) {
      setCurrencyRates(data);
    }
  }, [isSuccess, isLoading, data, setCurrencyRates]);
};
