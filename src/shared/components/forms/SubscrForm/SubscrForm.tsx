import { useUserStore } from "@/feature/user/user.store";
import { useModalStore } from "@/shared/stores/modal.store";
import { MODAL } from "@/shared/typing/modal.type";
import { onError } from "@/shared/utils/error-form";
import { FC, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useUpdateUser } from "../../../../feature/user/useUpdateUser";
import { Button } from "../../ui/Button/Button";
import { FormInput } from "../FormInput/FormInput";
import { AVAILABLE_FIELDS } from "../input.info";
import styles from "./SubscrForm.module.css";

export const SubscrForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const { user, isActivated } = useUserStore();
  const { update, updateIsPending, updateIsSuccess } = useUpdateUser();
  const { closeModal } = useModalStore();

  const email = user?.email;
  useEffect(() => {
    if (email) {
      setValue(AVAILABLE_FIELDS.EMAIL, email);
    }
  }, [setValue, email]);

  const onSubmit = (data: FieldValues) => {
    const updateData = {
      isSubscribedToNews: true,
      email: data.email,
    };

    update(updateData);
  };

  useEffect(() => {
    if (updateIsSuccess) {
      closeModal(MODAL.B_SUBSCR);
    }
  }, [closeModal, updateIsSuccess]);

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit, onError)}>
      {user && !isActivated() && (
        <FormInput
          fieldName={AVAILABLE_FIELDS.EMAIL}
          register={register}
          error={!!errors[AVAILABLE_FIELDS.EMAIL]}
        />
      )}

      <Button
        variant="primary"
        className={styles.button}
        disabled={updateIsPending}
      >
        подписаться
      </Button>
    </form>
  );
};
