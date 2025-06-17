import { useUserStore } from "@/feature/user/user.store";
import { useConvertPrice } from "@/shared/hooks/useConvertPrice";
import { useCurrencyStore } from "@/shared/stores/currency.store";
import { TCurrencyCode } from "@/shared/typing/currency.type";
import clsx from "clsx";
import Image from "next/image";
import { FC, useMemo } from "react";
import styles from "./PayMethods.module.css";

interface IPayMethods {
  price: number | string;
  currency?: TCurrencyCode;
}

export const PayMethods: FC<IPayMethods> = ({ price, currency }) => {
  const { currency: globalCurrency } = useCurrencyStore();
  const activeCurrency = currency || globalCurrency;

  const { convert } = useConvertPrice();
  const { user } = useUserStore();
  const balance = user?.balance;

  const balanceAvailable = useMemo(() => {
    if (!balance || !activeCurrency || !price) return false;

    const converted = convert(price, activeCurrency, "RUB");
    return +balance >= converted && +balance > 0 && !isNaN(converted);
  }, [price, activeCurrency, balance, convert]);

  return (
    <div className={styles.root}>
      <p className={styles.title}>Выберите способ оплаты:</p>

      <div className={styles.box}>
        <label className={styles.label}>
          <input
            type="radio"
            name="paymentMethod"
            value="sbp"
            className={styles.input}
            defaultChecked
          />
          <span className={styles.border}>
            <Image
              className={styles.image}
              src="/images/sbp.png"
              alt="sbp"
              width={120}
              height={60}
            />
          </span>
        </label>

        <label className={styles.label} inert={!balanceAvailable}>
          <input
            className={styles.input}
            type="radio"
            name="paymentMethod"
            value="donbalnce"
            disabled={!balanceAvailable}
          />
          <span className={styles.border}>
            <Image
              className={styles.image}
              src="/images/donbalance.png"
              alt="donbalnce"
              width={120}
              height={60}
            />
          </span>
          <div
            className={clsx(styles.shimmer, !balanceAvailable && styles.show)}
          />
        </label>

        <label className={styles.label} inert={true}>
          <input
            className={styles.input}
            type="radio"
            name="paymentMethod"
            value="card"
            disabled
          />
          <span className={styles.border}>
            <Image
              className={styles.image}
              src="/images/card.png"
              alt="card"
              width={120}
              height={60}
            />
          </span>
          <div className={clsx(styles.shimmer, styles.show)} />
        </label>

        <label className={styles.label} inert={true}>
          <input
            className={styles.input}
            type="radio"
            name="paymentMethod"
            value="bitcoin"
            disabled
          />
          <span className={styles.border}>
            <Image
              className={styles.image}
              src="/images/bitcoin.png"
              alt="bitcoin"
              width={120}
              height={60}
            />
          </span>
          <div className={clsx(styles.shimmer, styles.show)} />
        </label>
      </div>
    </div>
  );
};
