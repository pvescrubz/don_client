import { Container } from "@/shared/components/ui/containers/Container/Container";
import { TFooter } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import { HeaderBtnGroup } from "../../parts/HeaderBtnGroup/HeaderBtnGroup";
import { HeaderNav } from "../../parts/HeaderNav/HeaderNav";
import { LogoLink } from "../../parts/LogoLink/LogoLink";
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
