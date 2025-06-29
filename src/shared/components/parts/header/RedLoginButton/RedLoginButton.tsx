"use client";

import { redirect } from "next/navigation";
import { FC } from "react";

import { ENDPOINTS } from "@/shared/api/endpoints";
import { CONFIG } from "@/shared/model/config";
import { Button } from "../../../ui/Button/Button";
import { IconSteam } from "../../../ui/svg/IconSteam";
import styles from "./RedLoginButton.module.css";

export const RedLoginButton: FC = () => {
  const handleClick = async () => {
    redirect(CONFIG.API_BASE_URL_CLIENT + ENDPOINTS.steamLogin.url);
  };

  return (
    <Button
      className={styles.root}
      icon={<IconSteam className={styles.svg} />}
      onClick={handleClick}
    >
      <span className={styles.span}>ВОЙТИ ЧЕРЕЗ STEAM</span>
    </Button>
  );
};
