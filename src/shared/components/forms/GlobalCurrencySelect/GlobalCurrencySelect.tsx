import { useCurrencyStore } from "@/shared/stores/currency.store";
import { CURRENCY, ICurrency } from "@/shared/typing/currency.type";
import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { useEffect, type FC } from "react";
import { Controller, type Control } from "react-hook-form";
import { POST_INPUTS, TFieldKeys } from "../input.info";
import { Select } from "../ui/Select/Select";
import { StyledInput } from "../ui/StyledInput/StyledInput";
import styles from "./GlobalCurrencySelect.module.css";

interface IGlobalCurrencySelect extends TDiv {
  fieldName: TFieldKeys;
  error: boolean;
  control: Control;
  setValue: (name: string, value: string) => void;
}

export const GlobalCurrencySelect: FC<IGlobalCurrencySelect> = ({
  className,
  fieldName,
  control,
  setValue,
  error,
  ...rest
}) => {
  const { name, type, required, placeholder } = POST_INPUTS[fieldName];

  const { currency: cookieСurrency } = useCurrencyStore();

  const currency = CURRENCY.toArray();

  useEffect(() => {
    setValue(name, cookieСurrency || CURRENCY.RUB.value);
  }, [name, cookieСurrency, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => {
        const currentValue = field.value;

        const selectedCurrency =
          currency.find((r) => r.value === currentValue) ?? currency[0];

        const handleSelect = (item: ICurrency) => {
          field.onChange(item.value);
        };

        return (
          <div className={clsx(styles.root, className)} {...rest}>
            <StyledInput
              className={styles.input}
              InputProps={{
                type,
                placeholder,
                autoComplete: "off",
                readOnly: true,
                value: selectedCurrency.name,
              }}
              inert={true}
              error={error}
            />

            <Select
              iconInSelect
              selectOnSubmit
              items={currency}
              selected={selectedCurrency}
              onChange={handleSelect}
            />
          </div>
        );
      }}
    />
  );
};
