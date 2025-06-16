"use client";
import { useUserStore } from "@/feature/user/user.store";
import { CONFIG } from "@/shared/model/config";
import { FC } from "react";
import { ButtonCopy } from "../../ui/ButtonCopy/ButtonCopy";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import styles from "./Referal.module.css";

export const Referal: FC = () => {
  const { user } = useUserStore();
  if (!user) return null;
  const { ref, _count } = user;
  const { referrals } = _count;

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.root}>
          <h2 className={styles.title}>Реферальная программа </h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.item_title}>2%</p>
              <p className={styles.item_descr}>Ваш процент от пополнений</p>
            </li>
            <li className={styles.item}>
              <p className={styles.item_title}>
                {referrals ? referrals : "Нет данных"}
              </p>
              <p className={styles.item_descr}>Приглашенных пользователей</p>
            </li>
          </ul>
          <p className={styles.small_title}>
            Вы можете приглашать пользователей по реферальной ссылке.
          </p>
          <p className={styles.descr}>
            Вы будете получать 2% с пополнений пользователей. Денежные средства
            вы сможете потратить на покупку скинов в нашем магазине.
          </p>
          <div className={styles.bot}>
            <p className={styles.small_title}>Ваша реферальная ссылка</p>
            <ButtonCopy
              copyText={CONFIG.APP_BASE_URL + `?ref=${ref}`}
              className={styles.copy}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
