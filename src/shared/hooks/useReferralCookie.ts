"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { IS_PRODUCTIN } from "../constans/constans";
import { CONFIG } from "../model/config";
import { setCookie } from "../utils/cookies";

export function useReferralCookie() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref = searchParams?.get("ref");

    if (ref) {
      setCookie("ref", ref, {
        days: 1,
        path: "/",
        sameSite: "Lax",
        ...(IS_PRODUCTIN && { domain: CONFIG.APP_COOKIE_DOMAIN }),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
