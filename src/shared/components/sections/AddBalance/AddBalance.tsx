import { PLATFORM_CONFIG } from "@/shared/content/platorms.config";
import { FC } from "react";
import { AddBalanceGameForm } from "../../forms/addBalanceGamesForm/AddBalanceGamesForm/AddBalanceGameForm";
import { AllbalanceBg } from "../../parts/AllBalanceBg/AllBalancebg";
import { AllBalanceNav } from "../../parts/AllBalanceNav/AllBalanceNav";
import { Title } from "../../ui/Title/Title";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
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
          {config.logo && <AllbalanceBg image={config.logo} />}
          <Title>Пополнить баланс</Title>
          <AllBalanceNav />
          {config && <AddBalanceGameForm config={config} />}
        </Container>
      </Section>
    </>
  );
};
