import { ICheckoutData } from "@/feature/checkout/checkout.type";
import { useCheckout } from "@/feature/checkout/useCheckout";
import { OPERATION } from "@/feature/orders/orders.type";
import { useUserStore } from "@/feature/user/user.store";
import { FormInput } from "@/shared/components/forms/FormInput/FormInput";
import { AVAILABLE_FIELDS } from "@/shared/components/forms/input.info";
import { PayMethods } from "@/shared/components/forms/PayMethods/PayMethods";
import { Button } from "@/shared/components/ui/Button/Button";
import { useProtectedAction } from "@/shared/hooks/useProtectedAction";
import { FormatedPrice } from "@/shared/lib/FormatedPrice";
import { TForm } from "@/shared/typing/elements.type";
import { onError } from "@/shared/utils/error-form";
import clsx from "clsx";
import { FC, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styles from "./CartCheckoutForm.module.css";
import { CartClearAllBtn } from "./CartClearAllBtn";

interface ICartCheckoutForm extends TForm {
  itemsCount: number;
  totalPrice: number | string;
}
export const CartCheckoutForm: FC<ICartCheckoutForm> = ({
  itemsCount,
  totalPrice,
  className,
  ...rest
}) => {
  const { withTradeUrlAndEmailCheck } = useProtectedAction();
  const { checkout, checkoutIsPending } = useCheckout();
  const { user } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (user?.email) {
      setValue(AVAILABLE_FIELDS.EMAIL, user?.email);
    }
  }, [setValue, user?.email]);

  const onSubmit = (data: FieldValues) => {
    withTradeUrlAndEmailCheck(() => {
      checkout(data as ICheckoutData);
    });
  };

  return (
    <form
      className={clsx(styles.root, className)}
      {...rest}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormInput
        fieldName={AVAILABLE_FIELDS.OPERATION}
        register={register}
        error={!!errors[AVAILABLE_FIELDS.OPERATION]}
        defaultValue={OPERATION.BUY_SKINS}
      />
      <p className={styles.title}>Итого</p>
      <div className={clsx(styles.box, styles.border)}>
        <p className={styles.gray}>Предметы</p>
        <p className={styles.count}>{itemsCount}</p>
      </div>
      <div className={styles.box}>
        <PayMethods
          price={totalPrice}
          register={register}
          needConvertToRub={false}
        />
      </div>
      <div className={styles.box}>
        <p className={styles.amount_title}>Всего</p>
        <p className={styles.amount}>
          <FormatedPrice price={totalPrice} />
        </p>
      </div>
      <div className={styles.box}>
        <FormInput
          fieldName={AVAILABLE_FIELDS.EMAIL}
          register={register}
          error={!!errors[AVAILABLE_FIELDS.EMAIL]}
        />
      </div>

      <div className={styles.btn_group}>
        <Button size="small" type="submit" disabled={checkoutIsPending}>
          Оплатить
        </Button>
        <CartClearAllBtn />
      </div>
      <p className={styles.notic}>
        Покупая скины, я соглашаюсь с политикой конфиденциальности и правилами
        использоваия
      </p>
    </form>
  );
};
