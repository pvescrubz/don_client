"use client";

import { TDiv } from "@/shared/typing/elements.type";
import { ITheme } from '@/shared/typing/post-form.type';
import { blockAllText } from "@/shared/utils/block-all-text";
import Image from "next/image";
import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { CheckboxList } from "../../forms/CheckboxList/CheckboxList";
import { StyledInput } from "../StyledInput/StyledInput";
import { IconArraw } from "../svg/IconFilterArraw";
import { IconRegion } from "../svg/IconRegion";
import styles from './StyledSelect.module.css';

export interface IStyledSelect extends TDiv {
  InputProps: InputHTMLAttributes<HTMLInputElement>;
  label?: string;
  error?: boolean;
  isTextarea?: boolean;
  values: ITheme[];
  defaultValue?: string;
}

export const StyledSelect: FC<IStyledSelect> = ({
  InputProps,
  error = false,
  values,
  defaultValue,
  ...rest
}) => {
  const { onChange, ...inputProps } = InputProps;

  const [isShowList, setIsShowList] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(defaultValue || null);

const handleCheckboxChange = (value: string, checked: boolean) => {
  setSelectedItem(checked ? value : null);
  setIsShowList(false);
};

  useEffect(() => {
    if (onChange && selectedItem !== null) {
      const syntheticEvent = {
        target: { value: selectedItem },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  }, [selectedItem, onChange]);

  return (
    <>
      <div
        className={styles.select}
        tabIndex={1}
        onFocus={() => setIsShowList(true)}
        onBlurCapture={() => setIsShowList(false)}
        style={{ position: "relative" }}
        {...rest}
      >
        <StyledInput
        className={styles.input}
          InputProps={{
            onKeyDown: (event) => blockAllText(event),
            style: { caretColor: "transparent" },
            ...inputProps,
            value: "",
            onChange: (e) => {
              if (onChange) {
                onChange(e);
              }
            },
          }}
          error={error}
          iconLeft={<IconRegion />}
          iconRigth={
            selectedItem && (

              <>
              <Image
                src={values.find(v => v.value === selectedItem)?.image || ""}
                alt={selectedItem}
                width={40}
                height={26}
                className={styles.icon}
              />
              <IconArraw />
              </>
            )
          }
        />
       
        <CheckboxList
          values={values}
          onChangeValue={handleCheckboxChange}
          visible={isShowList}
        />
      </div>
    </>
  );
};