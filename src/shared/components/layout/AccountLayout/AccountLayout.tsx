import { Container } from "@/shared/components/ui/containers/Container/Container";
import { FC, PropsWithChildren } from "react";
import { AccountNav } from "../../parts/account/AccountNav/AccountNav";
import { LogoutButton } from "../../parts/account/LogoutButton/LogoutButton";
import { UserInfo } from "../../parts/account/UserInfo/UserInfo";
import { Box } from "../../ui/containers/Box/Box";
import { Title } from "../../ui/Title/Title";
import styles from "./AccountLayout.module.css";

export const AccountLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Box>
        <div className={styles.logout}>
          <LogoutButton />
        </div>

        <div className={styles.root}>
          <Title h1 className={styles.title}>
            Личный кабинет
          </Title>

          <UserInfo />
        </div>
      </Box>
      <Container>
        <AccountNav />
      </Container>
      {children}
    </>
  );
};
