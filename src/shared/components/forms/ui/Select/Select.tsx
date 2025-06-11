import clsx from "clsx";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { IconArraw } from "../../../ui/svg/IconFilterArraw";
import styles from "./Select.module.css";

export interface ISelectItem<T = string> {
  name: string;
  value: T;
  image: string;
  icon?: ReactNode;
}

interface ISelect<T> {
  className?: string;
  items: ISelectItem<T>[];
  selected: ISelectItem<T>;
  onChange: (value: ISelectItem<T>) => void;
  selectOnSubmit?: boolean;
  iconInSelect?: boolean;
}

export const Select = <T,>({
  className,
  items,
  selected,
  onChange,
  selectOnSubmit = false,
  iconInSelect = false,
}: ISelect<T>) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: ISelectItem<T>) => {
    onChange(item);
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={clsx(styles.root, className, open && styles.open)}
    >
      <button
        className={clsx(styles.button, iconInSelect && styles.p_small)}
        onClick={handleOpen}
        type="button"
      >
        {!iconInSelect && (
          <Image
            src={selected.image}
            alt={selected.name}
            width={40}
            height={26}
          />
        )}
        {iconInSelect && selected.icon && (
          <span className={styles.svg}>{selected.icon}</span>
        )}

        <IconArraw className={styles.arrow} />
      </button>
      <div className={styles.box} inert={open ? undefined : true}>
        <div className={styles.list}>
          {items.map((item, index) => (
            <button
              type={!selectOnSubmit ? "button" : "submit"}
              key={index}
              className={styles.select_button}
              onClick={() => handleSelect(item)}
            >
              {!iconInSelect && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={26}
                />
              )}
              {iconInSelect && item.icon && (
                <span className={styles.svg}>
                  {item.icon} <>{item.value}</>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
