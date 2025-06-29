import { userService } from "@/feature/user/user.service";
import { FC } from "react";
import { Container } from "../../ui/containers/Container/Container";
import { Title } from "../../ui/Title/Title";
import styles from "./Activate.module.css";

interface IActivate {
  token: string;
}

const ActivationMessage: FC<{ message: string }> = ({ message }) => (
  <section className={styles.root}>
    <Container>
      <Title>{message}</Title>
    </Container>
  </section>
);

export const Activate: FC<IActivate> = async ({ token }) => {
  
  try {
    const res = await userService.activate(token);

    return res ? (
      <ActivationMessage message="✅ Аккаунт успешно активирован!" />
    ) : (
      <ActivationMessage message="❌ Не удалось активировать аккаунт. Попробуйте снова позже." />
    );
  } catch {
    return (
      <ActivationMessage message="⚠️ Произошла ошибка при активации. Пожалуйста, повторите попытку позже." />
    );
  }
};
