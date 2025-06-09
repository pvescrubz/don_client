import { Container } from "@/shared/components/ui/containers/Container/Container";
import { TFooter } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import { HeaderBtnGroup } from "../../parts/header/HeaderBtnGroup/HeaderBtnGroup";
import { HeaderNav } from "../../parts/header/HeaderNav/HeaderNav";
import { LogoLink } from "../../parts/header/LogoLink/LogoLink";
import styles from "./Header.module.css";

export const Header: FC<TFooter> = ({ className, ...rest }) => {
  return (
    <header className={clsx(styles.root, className)} {...rest}>
      <Container className={styles.container}>
        <LogoLink />
        <HeaderNav />
        <HeaderBtnGroup />
      </Container>
    </header>
  );
};
