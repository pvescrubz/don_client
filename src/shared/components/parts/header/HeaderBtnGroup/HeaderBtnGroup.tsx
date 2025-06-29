"use client";

import { useAuthStore } from "@/feature/auth/auth.store";

import { GlobalCurrencyForm } from "@/shared/components/forms/GlobalCurrencyForm/GlobalCurrencyForm";
import { CartButton } from "../CartButton/CartButton";
import { LoginButton } from "../LoginButton/LoginButton";
import { MenuButton } from "../MenuButton/MenuButton";
import { ProfileButton } from "../ProfileButton/ProfileButton";
import styles from "./HeaderBtnGroup.module.css";

export const HeaderBtnGroup = () => {
  const { isAuth, loading } = useAuthStore();
  return (
    <div className={styles.root}>
      <GlobalCurrencyForm />
      {!isAuth && <LoginButton />}
      {isAuth && !loading && (
        <>
          <CartButton />
          <ProfileButton />
        </>
      )}

      <MenuButton />
    </div>
  );
};
