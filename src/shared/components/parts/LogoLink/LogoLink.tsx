import { TAnchor } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { IconLogo } from "../../ui/svg/IconLogo";
import styles from "./LogoLink.module.css";

export const LogoLink: FC<TAnchor> = ({ className, ...rest }) => {
  return (
    <Link href={"/"} className={clsx(styles.logo, className)} {...rest}>
      <IconLogo />
    </Link>
  );
};
