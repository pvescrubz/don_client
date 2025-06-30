"use client";

import { useTokenValidation } from "@/feature/auth/useTokenValidation";
import { useCurrencyRates } from "@/feature/currency/useCurrencyRates";
import { PropsWithChildren, Suspense } from "react";
import { ModalContainer } from "../components/modals/ModalContainer";
import { CookieBaner } from "../components/ui/CookieBaner/CookieBaner";
import { MyToaster } from "../components/ui/MyToaster/MyToaster";
import { SpeedDial } from "../components/ui/SpeedDial/SpeedDial";
import { RefCookiesParser } from "../lib/RefCookiesParser";
import { useModalStore } from "../stores/modal.store";

export function AppProvider({ children }: PropsWithChildren) {
  useTokenValidation();
  useCurrencyRates();

  const { anyDialogOpen } = useModalStore();

  return (
    <>
      {children}
      <CookieBaner />
      <SpeedDial />
      <ModalContainer />
      {!anyDialogOpen && <MyToaster />}
      <Suspense>
        <RefCookiesParser />
      </Suspense>
    </>
  );
}
