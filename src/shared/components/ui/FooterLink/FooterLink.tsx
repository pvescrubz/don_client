"use client";

import { TAnchor } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./FooterLink.module.css";

interface IFooterLink extends TAnchor {
  href: string;
}

export const FooterLink: FC<IFooterLink> = ({
  children,
  href,
  className,
  ...rest
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(styles.root, isActive && styles.active, className)}
      {...rest}
    >
      <span className={styles.span}>{children}</span>
    </Link>
  );
};
