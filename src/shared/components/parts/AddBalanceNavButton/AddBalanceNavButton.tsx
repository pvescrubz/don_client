"use client";

import { IPlatformConfigItem } from "@/shared/content/platorms.config";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./AddBalanceNavButton.module.css";

interface IAddBalanceNavButton {
  platform: IPlatformConfigItem;
}

export const AddBalanceNavButton: FC<IAddBalanceNavButton> = ({ platform }) => {
  const { navBg, logo, slug, name } = platform;

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
            src={navBg}
            fill
            alt={name}
            className={styles.bg}
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className={styles.logo_wrapper}>
            <Image
              src={logo}
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
