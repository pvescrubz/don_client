"use client";

import { useGetCart } from "@/feature/cart/useGetCart";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { FC } from "react";
import { CartCheckoutForm } from "../../forms/CartCheckoutForm/CartCheckoutForm";
import { CartList } from "../../parts/cart/CartList/CartList";
import { ButtonLink } from "../../ui/Button/ButtonLink";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./Cart.module.css";

export const Cart: FC = () => {
  const { cart } = useGetCart();

  if (!cart || !cart.itemsCount)
    return (
      <Section className={styles.root}>
        <Container>
          <Title>Ваша корзина пуста</Title>
          <ButtonLink href={APP_PAGES.SKINS.slug} className={styles.redirect}>
            В каталог
          </ButtonLink>
        </Container>
      </Section>
    );

  const { skins, itemsCount, total } = cart;

  return (
    <>
      <Section className={styles.root}>
        <Container>
          <Title h1 className={styles.title}>
            Корзина
          </Title>
          <div className={styles.box}>
            {skins.length && <CartList skins={skins} />}

            <CartCheckoutForm
              itemsCount={itemsCount}
              className={styles.checkout}
              totalPrice={total}
            />
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Cart;
