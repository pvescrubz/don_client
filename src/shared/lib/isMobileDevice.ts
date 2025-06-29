import { headers } from "next/headers";

export const isMobileDevice = async () => {
  const userAgent = (await headers()).get("user-agent") || "";
  const isMobile: boolean =
    /Mobile|Android|iP(hone|od|ad)|IEMobile|BlackBerry|Opera Mini/i.test(
      userAgent
    );
  return isMobile;
};
