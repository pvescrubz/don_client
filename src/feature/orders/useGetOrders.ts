"use client";

import { useQuery } from "@tanstack/react-query";
import { ordersService } from "./orders.service";

export const useGetOrders = () => {
  const { isSuccess, isError, isLoading, data } = useQuery({
    queryKey: ["orders"],
    queryFn: ordersService.getOrders,
    refetchInterval: 15 * 60 * 1000,
    staleTime: 0,
  });

  return { isSuccess, isError, isLoading, orders: data };
};
