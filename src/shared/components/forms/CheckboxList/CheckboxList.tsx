// CheckboxList.tsx

import { TDiv } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import { CheckboxItem } from "../CheckboxItem/CheckboxItem";
import styles from "./CheckboxList.module.css";

import { ITheme } from '@/shared/typing/post-form.type';

interface ICheckboxList extends TDiv {
  values: ITheme[];
  visible: boolean;
  onChangeValue: (value: string, checked: boolean) => void;
}

export const CheckboxList: FC<ICheckboxList> = ({
  visible,
  values,
  onChangeValue,
}) => {
  const handleClick = (value: string, checked: boolean) => {
    onChangeValue(value, checked);
  };

  const handleSelect = () => {
    visible = false;
  };

  return (
    <>
      {values && values.length > 0 && (
        <div className={clsx(styles.root, visible && styles.visible)}>
          <ul className={clsx(styles.list)}>
            {values.map((value, index) => (
              <CheckboxItem
                key={index}
                value={value}
                onChangeValue={(val, checked) => handleClick(val, checked)}
                onClick={handleSelect} // <-- Вызывается при клике
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};