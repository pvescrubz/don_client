"use client";

import { AVAILABLE_FIELDS } from "@/shared/components/forms/input.info";
import { RegionSelect } from "@/shared/components/forms/RegionSelect/RegionSelect";
import { Button } from "@/shared/components/ui/Button/Button";
import { IPlatformConfigItem } from "@/shared/content/platorms.config";
import { useFormWatchValues } from "@/shared/hooks/useFormWatchValues";
import { FormatedPrice } from "@/shared/lib/FormatedPrice";
import { CURRENCY, TCurrencyCode } from "@/shared/typing/currency.type";
import { onError } from "@/shared/utils/error-form";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { CurrencySelect } from "../../CurrencySelect/CurrencySelect";
import { FormInput } from "../../FormInput/FormInput";
import { FormTitle } from "../FormTitle/FormTitle";
import { PrivacyNotice } from "../PrivacyNotice/PrivacyNotice";
import { WarningSteam } from "../WarningSteam/WarningSteam";
import styles from "./AddBalanceForm.module.css";

interface IAddBalanceForm {
  config: IPlatformConfigItem;
}

export const AddBalanceForm: FC<IAddBalanceForm> = ({ config }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const { login, amount, promo, currency } = useFormWatchValues(control, [
    AVAILABLE_FIELDS.LOGIN,
    AVAILABLE_FIELDS.AMOUNT,
    AVAILABLE_FIELDS.PROMO,
    AVAILABLE_FIELDS.CURRENCY,
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  if (!config) return null;

  const { name, formTitle, formImage, logo, fieldTitle } = config;

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit, onError)}>
      <div className={clsx(styles.left, styles.content)}>
        <FormTitle bg={formImage} title={formTitle} logo={logo} />

        <div className={styles.box}>
          <p className={styles.field_title}>{fieldTitle}</p>
          {name !== "Steam" && (
            <RegionSelect
              fieldName={AVAILABLE_FIELDS.REGION}
              error={!!errors[AVAILABLE_FIELDS.REGION]}
              control={control}
              setValue={setValue}
              className={styles.region}
            />
          )}
          <FormInput
            fieldName={AVAILABLE_FIELDS.LOGIN}
            register={register}
            error={!!errors[AVAILABLE_FIELDS.LOGIN]}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.field_title}>Сумма</p>
          <div className={styles.sum_container}>
            <FormInput
              fieldName={AVAILABLE_FIELDS.AMOUNT}
              register={register}
              error={!!errors[AVAILABLE_FIELDS.AMOUNT]}
              className={styles.sum_input}
              iconLeft={CURRENCY[currency as TCurrencyCode].icon}
            />
            <CurrencySelect
              fieldName={AVAILABLE_FIELDS.CURRENCY}
              error={!!errors[AVAILABLE_FIELDS.CURRENCY]}
              control={control}
              setValue={setValue}
            />
          </div>
        </div>
        <div className={styles.box}>
          <p className={styles.field_title}>Промокод</p>
          <FormInput
            fieldName={AVAILABLE_FIELDS.PROMO}
            register={register}
            error={!!errors[AVAILABLE_FIELDS.PROMO]}
          />
        </div>
        {name === "Steam" && <WarningSteam />}
      </div>
      <div className={clsx(styles.right, styles.content)}>
        <div className={styles.descr_right}>
          <Image
            src={logo}
            alt="alt"
            width={31}
            height={31}
            className={styles.icon}
          />
          <p className={styles.field_title}>{formTitle}</p>
        </div>

        <div className={styles.box}>
          <p className={styles.field_title}>Выберите способ оплаты:</p>
          <Image
            src="/images/sbp.webp"
            alt="alt"
            width={120}
            height={60}
            className={styles.payment_image}
          />
        </div>
        <div className={styles.text_container}>
          <p className={styles.text}>
            Промокод:{" "}
            <span className={styles.field_title}> {promo || "-"}</span>
          </p>
          <p className={styles.text}>
            Учетная запись:{" "}
            <span className={styles.field_title}> {login || "-"}</span>
          </p>
          <p className={styles.text}>
            Сумма:{" "}
            <span className={styles.field_title}>
              {amount && (
                <FormatedPrice
                  prices={{
                    USD: amount,
                    RUB: amount,
                    EUR: amount,
                    KZT: amount,
                  }}
                  currency={currency as TCurrencyCode}
                />
              )}
              {!amount && "-"}
            </span>
          </p>
        </div>
        <div className={styles.box}>
          <FormInput
            fieldName={AVAILABLE_FIELDS.EMAIL}
            register={register}
            error={!!errors[AVAILABLE_FIELDS.EMAIL]}
          />
          <Button
            type="submit"
            size="large"
            variant="primary"
            className={styles.button}
          >
            ПОПОЛНИТЬ
          </Button>
        </div>
        <PrivacyNotice />
      </div>
    </form>
  );
};
