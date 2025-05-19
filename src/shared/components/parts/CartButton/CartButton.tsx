import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { ButtonLink } from "../../ui/Button/ButtonLink";
import { IconCart } from "../../ui/svg/IconCart";
import styles from "./CartButton.module.css";

export const CartButton = () => {
  return (
    <ButtonLink
      className={styles.root}
      href={APP_PAGES.CART.slug}
      variant="secondary"
      size="small"
    >
      <span className={styles.span}>
        <IconCart />
        <span className={styles.counter}>1</span>
      </span>
    </ButtonLink>
  );
};
