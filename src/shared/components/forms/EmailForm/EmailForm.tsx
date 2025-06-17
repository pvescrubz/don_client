"use client";

import { useUserStore } from "@/feature/user/user.store";
import { IUpdateData } from "@/feature/user/user.type";
import { useSendActivateEmail } from "@/feature/user/useSendActivateEmail";
import { useUpdateUser } from "@/feature/user/useUpdateUser";
import { AVAILABLE_FIELDS } from "@/shared/components/forms/input.info";
import { Button } from "@/shared/components/ui/Button/Button";
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
    setValue,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    setValue(AVAILABLE_FIELDS.EMAIL, user?.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (data: IUpdateData) => {
    if (!user?.email) {
      update(data);
    }
    if (user?.email && !isActivated()) {
      send();
    }
    if (user?.email && isActivated()) {
      update(data);
    }
  };

  if (!user) return null;

  const { email } = user;

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
          iconLeft={!isActivated() ? <IconNotActive /> : <IconActive />}
        />
        <Button
          type="submit"
          variant="primary"
          className={styles.button}
          disabled={updateIsPending || sendIsPending}
        >
          {!email && "Сохранить"}
          {email && !isActivated() && "Активировать"}
          {email && isActivated() && "Изменить"}
        </Button>
      </div>
      {!isActivated() && (
        <p className={styles.notic}>
          <span className={styles.red}>
            <b>
              {!email && "Добавьте и активируйте"}
              {email && !isActivated() && "Активировать"}
            </b>
          </span>{" "}
          email, чтобы совершать покупки и получать уведомления об операциях
        </p>
      )}
    </form>
  );
};
