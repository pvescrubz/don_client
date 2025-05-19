"use client";

import { redirect } from "next/navigation";
import { FC } from "react";
import { ENDPOINTS } from "../../../lib/endpoints";
import { Button } from "../../ui/Button/Button";
import { IconSteam } from "../../ui/svg/IconSteam";
import styles from "./LoginButton.module.css";

export const LoginButton: FC = () => {
  const handleClick = async () => {
    redirect(`http://localhost:8080${ENDPOINTS.steamLogin.url}`);
  };

  return (
    <Button
      className={styles.root}
      variant="secondary"
      size="small"
      icon={<IconSteam className={styles.svg} />}
      onClick={handleClick}
    >
      <span className={styles.span}>ВОЙТИ</span>{" "}
      <span className={styles.hidden}>ЧЕРЕЗ STEAM</span>
    </Button>
  );
};
