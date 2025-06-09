import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/Button/Button";
import { FormInput } from "../FormInput/FormInput";
import { AVAILABLE_FIELDS } from "../input.info";
import styles from "./PriceCheckForm.module.css";

export const PriceCheckForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        fieldName={AVAILABLE_FIELDS.LINK}
        register={register}
        error={!!errors[AVAILABLE_FIELDS.LINK]}
      />
      <FormInput
        fieldName={AVAILABLE_FIELDS.EMAIL}
        register={register}
        error={!!errors[AVAILABLE_FIELDS.EMAIL]}
      />
      <Button size="small" variant="primary" className={styles.button}>
        Получить
      </Button>
    </form>
  );
};
