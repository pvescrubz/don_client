"use client";

import { ICheckoutData } from "@/feature/checkout/checkout.type";
import { useCheckout } from "@/feature/checkout/useCheckout";
import { OPERATION } from "@/feature/orders/orders.type";
import { useUserStore } from "@/feature/user/user.store";
import { AVAILABLE_FIELDS } from "@/shared/components/forms/input.info";
import { Button } from "@/shared/components/ui/Button/Button";
import { useFormWatchValues } from "@/shared/hooks/useFormWatchValues";
import { FormatedPrice } from "@/shared/lib/FormatedPrice";
import { CURRENCY_ICON, TCurrencyCode } from "@/shared/typing/currency.type";
import { onError } from "@/shared/utils/error-form";
import { FC, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { PrivacyNotice } from "../addBalanceForm/PrivacyNotice/PrivacyNotice";
import { CurrencySelect } from "../CurrencySelect/CurrencySelect";

import { FormInput } from "../FormInput/FormInput";
import { PayMethods } from "../PayMethods/PayMethods";
import styles from "./AccountBalanceForm.module.css";

export const AccountBalanceForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const { user } = useUserStore();

  useEffect(() => {
    if (user?.email) {
      setValue(AVAILABLE_FIELDS.EMAIL, user?.email);
    }
  }, [setValue, user?.email]);

  const { amount, currency } = useFormWatchValues(control, [
    AVAILABLE_FIELDS.AMOUNT,
    AVAILABLE_FIELDS.CURRENCY,
  ]);

  const { checkout, checkoutIsPending } = useCheckout();

  const onSubmit = (data: FieldValues) => {
    checkout(data as ICheckoutData);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit, onError)}>
      <FormInput
        fieldName={AVAILABLE_FIELDS.OPERATION}
        register={register}
        error={!!errors[AVAILABLE_FIELDS.OPERATION]}
        defaultValue={OPERATION.RECHARGE_ACCUNT_BALANCE}
      />
      <div className={styles.left}>
        <div className={styles.box}>
          <p className={styles.field_title}>Введите сумму</p>
          <div className={styles.sum_container}>
            <FormInput
              fieldName={AVAILABLE_FIELDS.AMOUNT}
              register={register}
              error={!!errors[AVAILABLE_FIELDS.AMOUNT]}
              className={styles.sum_input}
              iconLeft={CURRENCY_ICON[currency as TCurrencyCode]}
            />
            <CurrencySelect
              fieldName={AVAILABLE_FIELDS.CURRENCY}
              error={!!errors[AVAILABLE_FIELDS.CURRENCY]}
              control={control}
              setValue={setValue}
            />
          </div>

          <div className={styles.box}>
            <p className={styles.field_title}>
              Email (для уведомления об операции)
            </p>
            <FormInput
              fieldName={AVAILABLE_FIELDS.EMAIL}
              register={register}
              error={!!errors[AVAILABLE_FIELDS.EMAIL]}
            />
          </div>
          <div className={styles.message}>
            <span className={styles.message_pr}>5%</span>
            <p className={styles.message_text}>
              от суммы пополнения! Такой бонус вы получаете при предварительном
              пополнении баланса вашего аккаунта
            </p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <PayMethods
          price={amount || 0}
          currency={currency as TCurrencyCode}
          accBalanceHidden
          register={register}
        />
        <div className={styles.text_container}>
          <p className={styles.text}>
            Сумма к оплате:{" "}
            <span className={styles.field_title}>
              {amount && (
                <FormatedPrice
                  price={amount}
                  currency={currency as TCurrencyCode}
                  needConvert={false}
                />
              )}
              {!amount && "-"}
            </span>
          </p>
          <p className={styles.text}>
            Вы получие:{" "}
            <span className={styles.field_title}>
              {amount && (
                <FormatedPrice
                  price={+amount * 1.05}
                  currency={currency as TCurrencyCode}
                  needConvert={false}
                />
              )}
              {!amount && "-"}
            </span>
          </p>
          <Button
            type="submit"
            size="large"
            variant="primary"
            className={styles.button}
            disabled={checkoutIsPending}
          >
            ПОПОЛНИТЬ
          </Button>
        </div>
        <PrivacyNotice />
      </div>
    </form>
  );
};
