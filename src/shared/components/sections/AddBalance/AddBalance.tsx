import { PLATFORM_CONFIG } from "@/shared/content/platorms.config";
import { FC } from "react";
import { AddBalanceGameForm } from "../../forms/addBalanceGamesForm/AddBalanceGamesForm/AddBalanceGameForm";
import { AddBalanceBg } from "../../parts/AddBalanceBg/AddBalanceBg";
import { AddBalanceNav } from "../../parts/AddBalanceNav/AddBalanceNav";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./AddBalance.module.css";
interface IAddBalance {
  platform: string;
}

export const AddBalance: FC<IAddBalance> = ({ platform }) => {
  const config = PLATFORM_CONFIG[platform];

  return (
    <>
      <Section className={styles.root}>
        <Container className={styles.container}>
          {config.logo && <AddBalanceBg image={config.logo} />}
          <Title>Пополнить баланс</Title>
          <AddBalanceNav />
          {config && <AddBalanceGameForm config={config} />}
        </Container>
      </Section>
    </>
  );
};
