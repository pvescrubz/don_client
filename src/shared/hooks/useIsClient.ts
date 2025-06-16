"use client";
import { useEffect, useState } from "react";

export const useIsClient = () => {
  const [isClientSide, setIsClientSide] = useState(false);
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  return { isClientSide };
};
