"use client";
import { TDiv } from "@/shared/typing/elements.type";
import { FC, ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { INPUTS, TFieldKeys } from "../input.info";
import { StyledInput } from "../ui/StyledInput/StyledInput";

interface IFormInput extends TDiv {
  fieldName: TFieldKeys;
  register: UseFormRegister<FieldValues>;
  error: boolean;
  iconLeft?: ReactNode;
}

export const FormInput: FC<IFormInput> = ({
  fieldName,
  register,
  error,
  className,
  iconLeft,
  ...rest
}) => {
  const {
    name,
    type,
    required,
    placeholder,
    defaultValue,
    iconRigth,
    iconLeft: iconLeftFromConfig,
    patternRegExp,
    patternMessage,
    blockLettersEntry,
  } = INPUTS[fieldName];

  return (
    <StyledInput
      className={className}
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

        ...(blockLettersEntry && {
          onKeyPress: (event) => {
            if (!/^\d$/.test(event.key)) {
              event.preventDefault();
            }
          },
        }),
      }}
      iconLeft={iconLeft ?? iconLeftFromConfig}
      iconRigth={iconRigth}
      error={error}
      {...rest}
    />
  );
};
