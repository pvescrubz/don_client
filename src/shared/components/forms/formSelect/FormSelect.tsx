
import { themes } from "@/shared/typing/post-form.type";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { StyledSelect } from "../../ui/StyledSelect/StyledSelect";
import { POST_INPUTS, TFieldKeys } from "../input.info";

interface IFormSelect {
  fieldName: TFieldKeys;
  error?: boolean;
  control: Control;
}

export const FormSelect: FC<IFormSelect> = ({ fieldName, error, control }) => {
  const { name, type, required, label, placeholder } = POST_INPUTS[fieldName];

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required,
      }}
      render={({ field }) => (
        <StyledSelect
          values={themes.map(theme => ({ value: theme.value, image: theme.image }))}
          label={label ? placeholder : ""}
          InputProps={{
            autoComplete: "off",
            placeholder,
            type,
            ...field,
          }}
          error={error}
        />
      )}
    />
  );
};
