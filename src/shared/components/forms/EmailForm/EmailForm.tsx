"use client";

import { useUserStore } from "@/feature/user/user.store";
import { IUpdateData } from "@/feature/user/user.type";
import { useSendActivateEmail } from "@/feature/user/useSendActivateEmail";
import { useUpdateUser } from "@/feature/user/useUpdateUser";
import { AVAILABLE_FIELDS } from "@/shared/components/forms/input.info";
import { Button } from "@/shared/components/ui/Button/Button";
import { useFormWatchValues } from "@/shared/hooks/useFormWatchValues";
import { TForm } from "@/shared/typing/elements.type";
import { onError } from "@/shared/utils/error-form";
import clsx from "clsx";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IconActive } from "../../ui/svg/IconActive";
import { IconNotActive } from "../../ui/svg/IconNotActive";
import { FormInput } from "../FormInput/FormInput";
import styles from "./EmailForm.module.css";

export const EmailForm: FC<TForm> = ({ className, ...rest }) => {
  const { user, isActivated } = useUserStore();

  const { update, updateIsPending } = useUpdateUser();
  const { send, sendIsPending } = useSendActivateEmail();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    mode: "onChange",
  });
  const { email: watchEmail } = useFormWatchValues(control, [
    AVAILABLE_FIELDS.EMAIL,
  ]);
  const email = user?.email;

  const emailChanged = watchEmail !== email;
  const isActivatedNow = isActivated();

  useEffect(() => {
    if (email) {
      setValue(AVAILABLE_FIELDS.EMAIL, email);
    }
  }, [setValue, email]);

  const onSubmit = (data: IUpdateData) => {
    if (!emailChanged && !email) {
      update(data);
    }
    if (!emailChanged && email && !isActivated()) {
      send();
    }
    if (!emailChanged && email && isActivated()) {
      update(data);
    }
    if (emailChanged) {
      update(data);
    }
  };

  if (!user) return null;

  return (
    <form
      className={clsx(styles.root, className)}
      onSubmit={handleSubmit(onSubmit, onError)}
      {...rest}
    >
      <div className={styles.box}>
        <p className={styles.lable}>Email</p>
        <FormInput
          className={styles.input}
          fieldName={AVAILABLE_FIELDS.EMAIL}
          register={register}
          error={!!errors[AVAILABLE_FIELDS.EMAIL]}
          iconLeft={!isActivatedNow ? <IconNotActive /> : <IconActive />}
        />
        <Button
          type="submit"
          variant="primary"
          className={styles.button}
          disabled={updateIsPending || sendIsPending}
        >
          {!emailChanged && !email && "Сохранить"}
          {!emailChanged && email && !isActivatedNow && "Активировать"}
          {!emailChanged && email && isActivatedNow && "Изменить"}
          {emailChanged && "Изменить"}
        </Button>
      </div>
      {!isActivatedNow && (
        <p className={styles.notic}>
          <span className={styles.red}>
            <b>
              {!email && "Добавьте и активируйте"}
              {email && !isActivatedNow && "Активировать"}
            </b>
          </span>{" "}
          email, чтобы совершать покупки и получать уведомления об операциях
        </p>
      )}
    </form>
  );
};
