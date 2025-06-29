import { PRIVATE_PAGES } from "@/shared/dashboard/private.dashboard";
import { FC } from "react";
import { ButtonLink } from "../../ui/Button/ButtonLink";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./CheckoutSuccess.module.css";

export const CheckoutSuccess: FC = () => {
  return (
    <>
      <Section className={styles.root}>
        <Container className={styles.container}>
          <div className={styles.box}>
            <Title>✅Ваш платеж принят!</Title>
            <p className={styles.text}>
              Перейдя по ссылке ниже, Вы сможете отслеживать статус вашей
              операции!
            </p>
            <ButtonLink
              href={PRIVATE_PAGES.ORDERS.slug}
              size="small"
              className={styles.button}
            >
              Отслеживать
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
};
