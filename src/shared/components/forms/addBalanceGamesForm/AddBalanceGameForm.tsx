import { FormInput } from "@/shared/components/forms/formInput/FormInput";
import { AVAILABLE_FIELDS } from "@/shared/components/forms/input.info";
import { Button } from "@/shared/components/ui/Button/Button";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { TFormProps } from "@/shared/typing/forms.type"; // Убедитесь, что TFormProps определяет 'config'
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FormSelect } from "../formSelect/FormSelect";
import styles from "./AddBalanceGameForm.module.css";

export const AddBalanceGameForm: FC<TFormProps> = ({ config }) => {
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
  if (!config) {
    return <p>Данные формы не загружены</p>;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const { name , title, formimage, navicon, description } = config;

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={clsx(styles.left, styles.content)}>
        <div
          className={styles.title_container}
          style={{
            backgroundImage: `url(${formimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src={navicon}
            alt="alt"
            width={60}
            height={60}
            className={styles.icon}
          />
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={clsx(styles.description_container, styles.pointer)}>
          <p className={styles.description}>{description}</p>
          {name !== "Steam" && (
          <FormSelect
          control={control}
          fieldName={AVAILABLE_FIELDS.THEMES}
          error={
            !!errors[AVAILABLE_FIELDS.THEMES] 
          }
        />
          )}
          <FormInput
            fieldName={AVAILABLE_FIELDS.ADD_LOGIN}
            register={register}
            error={!!errors[AVAILABLE_FIELDS.ADD_LOGIN]}
          />
        </div>
        <div className={styles.description_container}>
          <p className={styles.description}>Сумма</p>
          <FormInput
            fieldName={AVAILABLE_FIELDS.ONLY_NUMBERS}
            register={register}
            error={!!errors[AVAILABLE_FIELDS.ONLY_NUMBERS]}
          />
        </div>
        <div className={styles.description_container}>
          <p className={styles.description}>Промокод</p>
          <FormInput
            fieldName={AVAILABLE_FIELDS.ADD_PROMO}
            register={register}
            error={!!errors[AVAILABLE_FIELDS.ADD_PROMO]}
          />
        </div>
      </div>
      <div className={clsx(styles.right, styles.content)}>
        <div className={styles.description_right}>
          <Image
            src={navicon}
            alt="alt"
            width={31}
            height={31}
            className={styles.icon}
          />
          <p className={styles.description}>{title}</p>
        </div>

        <div className={styles.description_container}>
          <p className={styles.description}>Выберите способ оплаты:</p>
          <Image
            src="/images/sbp.webp"
            alt="alt"
            width={120}
            height={60}
            className={styles.payment_image}
          />
        </div>
        <div className={styles.payment_text_container}>
          <p className={styles.payment_text}>
            Промокод:{" "}
            <span className={styles.description}> {promoCodeValue || "-"}</span>
          </p>
          <p className={styles.payment_text}>
            Учетная запись:{" "}
            <span className={styles.description}> {loginValue || "-"}</span>
          </p>
          <p className={styles.payment_text}>
            Сумма:{" "}
            <span className={styles.description}> {amountValue || "-"}</span>
          </p>
        </div>
        <div className={styles.description_container}>
          <FormInput
            fieldName={AVAILABLE_FIELDS.EMAIL}
            register={register}
            error={!!errors[AVAILABLE_FIELDS.EMAIL]}
          />
          <Button
            type="submit"
            size="small"
            variant="primary"
            className={styles.button}
          >
            ПОПОЛНИТЬ
          </Button>{" "}
        </div>
        <p className={styles.description_link}>
          Нажимая кнопку пополнить, я принимаю условия{" "}
          <Link href={APP_PAGES.FAQ.slug} className={styles.terms}>
            пользовательского соглашения
          </Link>
           и подтверждаю ознакомление с 
          <Link href={APP_PAGES.FAQ.slug} className={styles.terms}>
            FAQ
          </Link>
          .
        </p>
      </div>
    </form>
  );
};
