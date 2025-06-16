import { ButtonLink } from "@/shared/components/ui/Button/ButtonLink";
import { PRIVATE_PAGES } from "@/shared/dashboard/private.dashboard";
import { FC } from "react";
import styles from "./AccountNav.module.css";

export const AccountNav: FC = () => {
  const navItems = PRIVATE_PAGES.getForNav();

  return (
    <>
      {navItems && (
        <nav className={styles.root}>
          {navItems.map((item) => (
            <ButtonLink
              href={item.slug}
              key={item.slug}
              variant="secondary"
              size="small"
              className={styles.link}
              scroll={false}
            >
              {item.name}
            </ButtonLink>
          ))}
        </nav>
      )}
    </>
  );
};
