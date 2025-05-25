
import { TInput } from "@/shared/typing/elements.type";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CheckboxItem.module.css";

interface ICheckboxItem extends Omit<TInput, 'value'> {
  value: { value: string; image: string };
  onChangeValue: (value: string, checked: boolean) => void;
  isChecked?: boolean;
}

export const CheckboxItem: FC<ICheckboxItem> = ({ value, onChangeValue }) => {
  const [uniqueId, setUniqueId] = useState<string>();

  useEffect(() => {
    const randomHash = Math.random().toString(36).substring(2, 8);
    setUniqueId(randomHash);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(value.value, e.currentTarget.checked);
  };

  return (
    <>
      {value && (
        <li className={styles.root}>
          <label htmlFor={uniqueId} className={styles.label}>
            <input
              type="checkbox"
              className={styles.input}
              id={uniqueId}
              value={value.value}
              onChange={handleChange}
            />
            <Image src={value.image} alt={value.value} width={40} height={26}  />
          </label>
        </li>
      )}
    </>
  );
};
