import { AddBalanceNav } from "../../parts/addBalance/AddBalanceNav/AddBalanceNav";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./AddBalanceFake.module.css";

export const AddBalanceFake = () => {
  return (
    <Section className={styles.root}>
      <Title>Пополнить баланс</Title>
      <Container className={styles.container}>
        <AddBalanceNav />
      </Container>
    </Section>
  );
};
