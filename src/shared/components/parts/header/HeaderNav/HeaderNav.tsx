"use client";
import { HeaderLink } from "@/shared/components/ui/HeaderLink/HeaderLink";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { useMobileMenu } from "@/shared/stores/mobile-menu.store";
import { TNav } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./HeaderNav.module.css";

export const HeaderNav: FC<TNav> = ({ className, ...rest }) => {
  const { menuOpen, closeMenu } = useMobileMenu();

  const nav = APP_PAGES.getForHeader();
  return (
    <>
      {nav && (
        <nav
          className={clsx(styles.root, className, menuOpen && styles.active)}
          {...rest}
        >
          {nav.map((item, index) => (
            <HeaderLink href={item.slug} key={index} onClick={closeMenu}>
              {item.name}
            </HeaderLink>
          ))}
        </nav>
      )}
    </>
  );
};
