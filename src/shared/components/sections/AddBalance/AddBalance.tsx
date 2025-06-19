import { PLATFORM_CONFIG } from "@/shared/content/platorms.config";
import { FC } from "react";
import { AddBalanceForm } from "../../forms/addBalanceForm/AddBalanceForm/AddBalanceForm";
import { AddBalanceBg } from "../../parts/addBalance/AddBalanceBg/AddBalanceBg";
import { AddBalanceNav } from "../../parts/addBalance/AddBalanceNav/AddBalanceNav";
import { Breadcrumbs } from "../../ui/BreadCrums/BreadCrums";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./AddBalance.module.css";
interface IAddBalance {
  platform: string;
}

export const AddBalance: FC<IAddBalance> = ({ platform }) => {
  const config = PLATFORM_CONFIG[platform];

  const customNames = { [platform]: config.formTitle };

  return (
    <>
      <Breadcrumbs customNames={customNames} />
      <Section className={styles.root}>
        <Container className={styles.container}>
          {config.logo && <AddBalanceBg image={config.logo} />}
          <Title>Пополнить баланс</Title>
          <AddBalanceNav />
          {config && <AddBalanceForm config={config} />}
        </Container>
      </Section>
    </>
  );
};
