import { FC } from "react";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./CheckoutError.module.css";

export const CheckoutError: FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.root}>
          <Title>❌Вознила ошибка при оплате!</Title>
          <p className={styles.text}>
            Свяжитесь с нашей <b>службой поддержки!</b> Мы решим проблему в
            кротчайшие сроки!
          </p>
        </div>
      </Container>
    </Section>
  );
};
