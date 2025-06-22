import { IPriceGuaranteeData } from "@/feature/price-guarantee/price-guarantee.type";
import { usePriceGuarantee } from "@/feature/price-guarantee/usePriceGuarantee";
import { useUserStore } from "@/feature/user/user.store";
import { useModalStore } from "@/shared/stores/modal.store";
import { MODAL } from "@/shared/typing/modal.type";
import { onError } from "@/shared/utils/error-form";
import { FC, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../../ui/Button/Button";
import { Spinner } from "../../ui/svg/Spiner";
import { FormInput } from "../FormInput/FormInput";
import { AVAILABLE_FIELDS } from "../input.info";
import styles from "./PriceGuaranteeForm.module.css";

export const PriceGuaranteeForm: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const { user } = useUserStore();

  const email = user?.email;
  useEffect(() => {
    if (email) {
      setValue(AVAILABLE_FIELDS.EMAIL, email);
    }
  }, [setValue, email]);

  const {
    sendAnApplication,
    sendAnApplicationIsPending,
    sendAnApplicationIsSuccess,
  } = usePriceGuarantee();
  const { closeModal } = useModalStore();

  const onSubmit = (data: FieldValues) => {
    sendAnApplication(data as IPriceGuaranteeData);
  };

  useEffect(() => {
    if (sendAnApplicationIsSuccess) closeModal(MODAL.P_PRICE_GUARANTEE);
  }, [closeModal, sendAnApplicationIsSuccess]);

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit, onError)}>
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
      <Button
        size="small"
        variant="primary"
        className={styles.button}
        disabled={sendAnApplicationIsPending}
      >
        {!sendAnApplicationIsPending && <>Получить</>}
        {sendAnApplicationIsPending && <Spinner />}
      </Button>
    </form>
  );
};
