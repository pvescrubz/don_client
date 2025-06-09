'use client'

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useUserStore } from "../user/user.store";
import { authService } from "./auth.service";
import { useAuthStore } from "./auth.store";

export const useTokenValidation = () => {
  const { setIsAuth, setLoading } = useAuthStore();
  const { setUser } = useUserStore();

  const resp = useQuery({
    queryKey: ["validateToken"],
    queryFn: authService.checkAuth,
    refetchInterval: 15 * 60 * 1000,
    staleTime: 0,
    retry: false,
  });

  const { isSuccess, isError, isLoading, data } = resp;

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setUser(data);
      setIsAuth(true);
    }
  }, [isSuccess, isLoading, data, setUser, setIsAuth]);

  useEffect(() => {
    if (isError && !isLoading) {
      setUser(null);
      setIsAuth(false);
    }
  }, [isError, isLoading, setUser, setIsAuth]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);
};
