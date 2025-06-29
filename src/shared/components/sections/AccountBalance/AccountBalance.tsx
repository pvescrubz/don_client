import { AccountBalanceForm } from "../../forms/AccountBalanceForm/AccountBalanceForm";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./AccountBalance.module.css";

export const AccountBalance = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.root}>
          <h1 className={styles.title}>Пополнить баланс аккаунта</h1>
          <AccountBalanceForm />
        </div>
      </Container>
    </Section>
  );
};
