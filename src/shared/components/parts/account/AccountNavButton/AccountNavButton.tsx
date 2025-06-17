"use client";

import { ButtonLink } from "@/shared/components/ui/Button/ButtonLink";
import { TAnchor } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./AccountNavButton.module.css";

export const AccountNavButton: FC<TAnchor> = ({
  href,
  children,
  className,
  ...rest
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      {href && (
        <ButtonLink
          href={href}
          variant="secondary"
          size="small"
          scroll={false}
          className={clsx(className, isActive && styles.active)}
          {...rest}
          inert={isActive}
        >
          {children}
        </ButtonLink>
      )}
    </>
  );
};
