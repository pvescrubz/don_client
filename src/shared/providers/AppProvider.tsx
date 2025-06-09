"use client";

import { useTokenValidation } from "@/feature/auth/useTokenValidation";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export function AppProvider({ children }: PropsWithChildren) {
  useTokenValidation();

  return (
    <>
      {children}
      <Toaster position="top-right" />
      {/* <ModalsContainer /> */}
 
    </>
  );
}
