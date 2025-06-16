"use client";

import { useLogout } from "@/feature/auth/useLogout";
import { FC } from "react";
import { Button } from "../../../ui/Button/Button";

export const LogoutButton: FC = () => {
  const { logout, isPending } = useLogout();
  const handleClick = () => {
   
    logout();
  };

  return (
    <Button variant="secondary" size="small" onClick={handleClick}>
      {isPending ? "Выходим..." : "Выйти"}
    </Button>
  );
};
