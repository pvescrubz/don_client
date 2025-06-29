"use client";
import { TAnchor } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./HeaderLink.module.css";

interface IHeaderLink extends TAnchor {
  href: string;
}

export const HeaderLink: FC<IHeaderLink> = ({
  children,
  href,
  className,
  ...rest
}) => {
  const pathname = usePathname();
  const isActive = pathname?.split("/")[1] === href?.split("/")[1];

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
