import { TDiv } from "@/shared/typing/elements.type";
import { IRegion, REGIONS } from "@/shared/typing/regions.type";
import clsx from "clsx";
import { useEffect, type FC } from "react";
import { Controller, type Control } from "react-hook-form";
import { POST_INPUTS, TFieldKeys } from "../input.info";
import { Select } from "../ui/Select/Select";
import { StyledInput } from "../ui/StyledInput/StyledInput";
import styles from "./RegionSelect.module.css";

interface IRegionSelect extends TDiv {
  fieldName: TFieldKeys;
  error: boolean;
  control: Control;
  setValue: (name: string, value: string) => void;
}

export const RegionSelect: FC<IRegionSelect> = ({
  className,
  fieldName,
  control,
  setValue,
  error,
  ...rest
}) => {
  const { name, type, required, placeholder } = POST_INPUTS[fieldName];

  useEffect(() => {
    setValue(name, REGIONS[0].value);
  }, [name, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => {
        const currentValue = field.value;

        const selectedRegion =
          REGIONS.find((r) => r.value === currentValue) ?? REGIONS[0];

        const handleSelect = (item: IRegion) => {
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
                value: selectedRegion.name,
              }}
              inert={true}
              error={error}
            />

            <Select
              items={REGIONS}
              selected={selectedRegion}
              onChange={handleSelect}
            />
          </div>
        );
      }}
    />
  );
};
