import { onError } from "@/shared/utils/error-form";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/Button/Button";
import { FormInput } from "../FormInput/FormInput";
import { AVAILABLE_FIELDS } from "../input.info";
import styles from "./SubscrForm.module.css";

export const SubscrForm: FC = () => {
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
    <form className={styles.root} onSubmit={handleSubmit(onSubmit, onError)}>
      <FormInput
        fieldName={AVAILABLE_FIELDS.EMAIL}
        register={register}
        error={!!errors[AVAILABLE_FIELDS.EMAIL]}
      />
      <Button variant="primary" className={styles.button}>
        подписаться
      </Button>
    </form>
  );
};
