import { Button } from "@/shared/components/ui/Button/Button";
import { FormatedPrice, IPrices } from "@/shared/lib/FormatedPrice";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./CartCheckout.module.css";
import { CartClearAllBtn } from "./CartClearAllBtn";

interface ICartCheckout extends TDiv {
  itemsCount: number;
  totalPrices: IPrices;
}
export const CartCheckout: FC<ICartCheckout> = ({
  itemsCount,
  totalPrices,
  className,
  ...rest
}) => {

  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <p className={styles.title}>Итого</p>
      <div className={clsx(styles.box, styles.border)}>
        <p className={styles.gray}>Предметы</p>
        <p className={styles.count}>{itemsCount}</p>
      </div>
      <div className={styles.box}>
        <p className={styles.amount_title}>Всего</p>
        <p className={styles.amount}>
          <FormatedPrice prices={totalPrices} />
        </p>
      </div>
      <div className={styles.btn_group}>
        <Button size="small">Оплатить</Button>
        <CartClearAllBtn />
      </div>
      <p className={styles.notic}>
        Покупая скины, я соглашаюсь с политикой конфиденциальности и правилами
        использоваия
      </p>
    </div>
  );
};
