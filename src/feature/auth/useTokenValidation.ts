"use client";

import { useCurrencyStore } from "@/shared/stores/currency.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "../user/user.store";
import { authService } from "./auth.service";
import { useAuthStore } from "./auth.store";

export const useTokenValidation = () => {
  const { setIsAuth, setLoading } = useAuthStore();
  const { setUser } = useUserStore();
  const { setCurrency } = useCurrencyStore();

  const resp = useQuery({
    queryKey: ["user"],
    queryFn: authService.checkAuth,
    refetchInterval: 15 * 60 * 1000,
    staleTime: 0,
    retry: false,
  });

  const { isSuccess, isError, isLoading, data } = resp;

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setUser(data);
      setCurrency(data.selectedCurrency);
      setIsAuth(true);
    }
  }, [isSuccess, isLoading, data, setUser, setIsAuth, setCurrency]);

  useEffect(() => {
    if (isError && !isLoading) {
      setUser(null);
      setIsAuth(false);
    }
  }, [isError, isLoading, setUser, setIsAuth]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return { isSuccess, isError, isLoading, data };
};
