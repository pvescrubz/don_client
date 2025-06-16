"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { setCookie } from "../utils/cookies";

export function useReferralCookie() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref = searchParams?.get("ref");

    if (ref) {
      setCookie("ref", ref, {
        days: 30,
        path: "/",
        sameSite: "Lax",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
