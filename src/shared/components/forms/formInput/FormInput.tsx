import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { StyledInput } from "../../ui/StyledInput/StyledInput";
import { POST_INPUTS, TFieldKeys } from "../input.info";


interface IFromInput {
  fieldName: TFieldKeys;
  register: UseFormRegister<FieldValues>;
  error: boolean;
}

export const FormInput: FC<IFromInput> = ({ fieldName, register, error }) => {
  const {
    name,
    type,
    required,
    placeholder,
    defaultValue,
    iconRigth,
    iconLeft,
    patternRegExp,
    patternMessage,
  } = POST_INPUTS[fieldName];

  return (
    <StyledInput
      InputProps={{
        autoComplete: "off",
        type,
        placeholder,
        defaultValue,
        ...register(name, {
          required,
          pattern:
            patternRegExp && patternMessage
              ? { value: patternRegExp, message: patternMessage }
              : undefined,
        }),
      }}
      iconLeft={iconLeft}
     iconRigth={iconRigth}
      error={error}
    />
  );
};
