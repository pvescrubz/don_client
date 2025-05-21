"use client";

import { ButtonLink } from "@/shared/components/ui/Button/ButtonLink";
import { TAnchor } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./GameNavBtn.module.css";

interface IGameNavBtn extends TAnchor {
  href: string;
}

export const GameNavBtn: FC<IGameNavBtn> = ({
  children,
  href,
  className,
  ...rest
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <ButtonLink
      href={href}
      className={clsx(styles.root, className)}
      {...rest}
      noPadding
      variant={isActive ? "primary" : "secondary"}
      size="small"
    >
      {children}
    </ButtonLink>
  );
};
