"use client";
import { useEffect, useState } from "react";

export const useIsClient = () => {
  const [clientSide, setClientSide] = useState(false);
  useEffect(() => {
    setClientSide(true);
  }, []);

  return { clientSide };
};
