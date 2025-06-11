"use client";

import { useAuthStore } from "@/feature/auth/auth.store";
import { useChangeCurrency } from "@/feature/user/useChangeCurrency";
import { AVAILABLE_FIELDS } from "@/shared/components/forms/input.info";
import { useCurrencyStore } from "@/shared/stores/currency.store";
import { onError } from "@/shared/utils/error-form";
import { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { GlobalCurrencySelect } from "../GlobalCurrencySelect/GlobalCurrencySelect";
import styles from "./GlobalCurrencyForm.module.css";

export const GlobalCurrencyForm: FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    mode: "onChange",
  });
  const { setCurrency } = useCurrencyStore();
  const { isAuth } = useAuthStore();
  const { change } = useChangeCurrency();

  const onSubmit = (data: FieldValues) => {
    const { currency } = data;
    if (currency) {
      setCurrency(currency);
    }
    if (isAuth) {
      change();
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit, onError)}>
      <GlobalCurrencySelect
        fieldName={AVAILABLE_FIELDS.CURRENCY}
        error={!!errors[AVAILABLE_FIELDS.CURRENCY]}
        control={control}
        setValue={setValue}
      />
    </form>
  );
};
