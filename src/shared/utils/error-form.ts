import type { FieldError, FieldErrors, FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

export const onError = (errors: FieldErrors<FieldValues>) => {
  const errorsArray = Object.entries(errors).map(([field, error]) => ({
    field,
    error: error as FieldError,
  }));

  if (errorsArray.length > 0) {
    const firstError = errorsArray[0].error;
    if (firstError?.message) {
      toast.error(firstError.message);
    }
  }
};
