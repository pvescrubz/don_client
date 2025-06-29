import { PRIVATE_PAGES } from "@/shared/dashboard/private.dashboard";
import { FC } from "react";
import { AccountNavButton } from "../AccountNavButton/AccountNavButton";
import styles from "./AccountNav.module.css";

export const AccountNav: FC = () => {
  const navItems = PRIVATE_PAGES.getForNav();

  return (
    <>
      {navItems && (
        <nav className={styles.root}>
          {navItems.map((item) => (
            <AccountNavButton
              key={item.slug}
              href={item.slug}
              className={styles.link}
            >
              {item.name}{" "}
            </AccountNavButton>
          ))}
        </nav>
      )}
    </>
  );
};
