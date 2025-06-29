"use client";


import { useGetCart } from "@/feature/cart/useGetCart";
import { ButtonLink } from "@/shared/components/ui/Button/ButtonLink";
import { IconCart } from "@/shared/components/ui/svg/IconCart";
import { PRIVATE_PAGES } from "@/shared/dashboard/private.dashboard";
import styles from "./CartButton.module.css";

export const CartButton = () => {
  const { cart, isLoading } = useGetCart();

  return (
    <ButtonLink
      className={styles.root}
      href={PRIVATE_PAGES.CART.slug}
      variant="secondary"
      size="small"
    >
      <span className={styles.span}>
        <IconCart />
        <span className={styles.counter}>
          {!cart && isLoading && "0"}
          {cart && !isLoading && cart.itemsCount}
        </span>
      </span>
    </ButtonLink>
  );
};
