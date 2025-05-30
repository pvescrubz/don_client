"use client";
import { TGamePlatform } from "@/shared/content/lib/platorms.config";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./AllBalanceNavButton.module.css";

interface IAllBalanceNavButton {
  platform: TGamePlatform;
}

export const AllBalanceNavButton: FC<IAllBalanceNavButton> = ({ platform }) => {
  const { navimage, navicon, slug, name } = platform;

  const pathname = usePathname();
  const isActive = pathname === slug;

  return (
    <>
      {slug && (
        <Link
          href={slug}
          className={clsx(styles.root, isActive && styles.active)}
          inert={isActive}
        >
          <Image
            src={navimage}
            fill
            alt={name}
            className={styles.bg}
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className={styles.logo_wrapper}>
            <Image
              src={navicon}
              alt={name}
              width={60}
              height={60}
              className={styles.navicon}
              quality={100}
            />
          </span>
          <span className={styles.button_text}>{name}</span>
        </Link>
      )}
    </>
  );
};
