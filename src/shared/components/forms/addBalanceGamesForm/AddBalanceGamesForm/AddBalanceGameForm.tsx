"use client";

import { FormInput } from "@/shared/components/forms/FormInput/FormInput";
import { AVAILABLE_FIELDS } from "@/shared/components/forms/input.info";
import { Button } from "@/shared/components/ui/Button/Button";
import { IForm } from "@/shared/typing/forms.type";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FormSelect } from "../../FormSelect/FormSelect";

import { FormTitle } from "../FormTitle/FormTitle";
import { PrivacyNotice } from "../PrivacyNotice/PrivacyNotice";
import { WarningSteam } from "../WarningSteam/WarningSteam";
import styles from "./AddBalanceGameForm.module.css";

export const AddBalanceGameForm: FC<IForm> = ({ config }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
  });
  const loginValue = useWatch({ control, name: AVAILABLE_FIELDS.ADD_LOGIN });
  const amountValue = useWatch({
    control,
    name: AVAILABLE_FIELDS.ONLY_NUMBERS,
  });
  const promoCodeValue = useWatch({
    control,
    name: AVAILABLE_FIELDS.ADD_PROMO,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  if (!config) return null;

  const { name, formTitle, formImage, logo, fieldTitle } = config;

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={clsx(styles.left, styles.content)}>
        <FormTitle bg={formImage} title={formTitle} logo={logo} />
        <div className={styles.box}>
          <p className={styles.field_title}>{fieldTitle}</p>
          {name !== "Steam" && (
            <FormSelect
              control={control}
              fieldName={AVAILABLE_FIELDS.THEMES}
              error={!!errors[AVAILABLE_FIELDS.THEMES]}
            />
          )}
          <FormInput
            fieldName={AVAILABLE_FIELDS.ADD_LOGIN}
            register={register}
            error={!!errors[AVAILABLE_FIELDS.ADD_LOGIN]}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.field_title}>Сумма</p>
          <FormInput
            fieldName={AVAILABLE_FIELDS.ONLY_NUMBERS}
            register={register}
            error={!!errors[AVAILABLE_FIELDS.ONLY_NUMBERS]}
          />
        </div>
        <div className={styles.box}>
          <p className={styles.field_title}>Промокод</p>
          <FormInput
            fieldName={AVAILABLE_FIELDS.ADD_PROMO}
            register={register}
            error={!!errors[AVAILABLE_FIELDS.ADD_PROMO]}
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
            <span className={styles.field_title}> {promoCodeValue || "-"}</span>
          </p>
          <p className={styles.text}>
            Учетная запись:{" "}
            <span className={styles.field_title}> {loginValue || "-"}</span>
          </p>
          <p className={styles.text}>
            Сумма:{" "}
            <span className={styles.field_title}> {amountValue || "-"}</span>
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
