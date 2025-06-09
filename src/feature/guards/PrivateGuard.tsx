"use client";

import { FullPageSpinner } from "@/shared/components/ui/FullPageSpiner/FullPageSpiner";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { redirect } from "next/navigation";
import { type ReactNode, useEffect } from "react";
import { useAuthStore } from "../auth/auth.store";

export const PrivateGuard = ({ children }: { children: ReactNode }) => {
  const { isAuth, loading } = useAuthStore();

  useEffect(() => {
    if (!isAuth && !loading && loading !== null) {
      redirect(APP_PAGES.SKINS.slug);
    }
  }, [isAuth, loading]);

  if (loading || loading === null) return <FullPageSpinner isLoading />;

  if (isAuth && !loading && loading !== null) {
    return <>{children}</>;
  }
};
