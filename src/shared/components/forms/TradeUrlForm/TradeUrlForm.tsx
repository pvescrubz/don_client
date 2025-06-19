"use client";

import { AVAILABLE_FIELDS } from "@/shared/components/forms/input.info";
import { Button } from "@/shared/components/ui/Button/Button";
import { onError } from "@/shared/utils/error-form";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useUserStore } from "@/feature/user/user.store";
import { IUpdateData } from "@/feature/user/user.type";
import { useUpdateUser } from "@/feature/user/useUpdateUser";
import { TForm } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { IconActive } from "../../ui/svg/IconActive";
import { IconNotActive } from "../../ui/svg/IconNotActive";
import { FormInput } from "../FormInput/FormInput";
import styles from "./TradeUrlForm.module.css";

export const TradeUrlForm: FC<TForm> = ({ className, ...rest }) => {
  const { user } = useUserStore();
  const { update, updateIsPending } = useUpdateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },

    setValue,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    setValue(AVAILABLE_FIELDS.TRADE_URL, user?.steamTradeUrl);
  }, [setValue, user]);

  const onSubmit = (data: IUpdateData) => {
    update(data);
  };

  return (
    <form
      className={clsx(styles.root, className)}
      onSubmit={handleSubmit(onSubmit, onError)}
      {...rest}
    >
      {user?.steamId && (
        <div className={styles.helper}>
          Узнать Ваш Trade Url можно{" "}
          {user?.steamId && (
            <a
              className={styles.red}
              href={`https://steamcommunity.com/profiles/${user.steamId}/tradeoffers/privacy#trade_offer_access_url`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <b>ЗДЕСЬ</b>
            </a>
          )}
        </div>
      )}

      <div className={styles.box}>
        <p className={styles.lable}>Trade URL</p>
        <FormInput
          className={styles.input}
          fieldName={AVAILABLE_FIELDS.TRADE_URL}
          register={register}
          error={!!errors[AVAILABLE_FIELDS.TRADE_URL]}
          iconLeft={!user?.steamTradeUrl ? <IconNotActive /> : <IconActive />}
        />
        <Button
          type="submit"
          variant="primary"
          className={styles.button}
          disabled={updateIsPending}
        >
          {!user?.steamTradeUrl && "Сохранить"}
          {user?.steamTradeUrl && "Изменить"}
        </Button>
      </div>
    </form>
  );
};
