"use client";

import { useTokenValidation } from "@/feature/auth/useTokenValidation";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { ModalsContainer } from "../components/popup/ModalsContainer";


export function PageProvider({ children }: PropsWithChildren) {
  useTokenValidation();
  return (
    <>
      {children}
      <Toaster position="top-right" />
      <ModalsContainer />
    </>
  );
}
