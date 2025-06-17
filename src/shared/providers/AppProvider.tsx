"use client";

import { useTokenValidation } from "@/feature/auth/useTokenValidation";
import { useCurrencyRates } from "@/feature/currency/useCurrencyRates";
import { PropsWithChildren, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { ModalContainer } from "../components/modals/ModalContainer";
import { RefCookiesParser } from "../lib/RefCookiesParser";

export function AppProvider({ children }: PropsWithChildren) {
  useTokenValidation();
  useCurrencyRates();

  return (
    <>
      {children}
      <Toaster position="top-left" />
      <ModalContainer />
      <Suspense>
        <RefCookiesParser />
      </Suspense>
    </>
  );
}
