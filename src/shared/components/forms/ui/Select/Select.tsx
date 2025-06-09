import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IconArraw } from "../../../ui/svg/IconFilterArraw";
import styles from "./Select.module.css";

export interface ISelectItem<T = string> {
  name: string;
  value: T;
  image: string;
}

interface ISelect<T> {
  className?: string;
  items: ISelectItem<T>[];
  selected: ISelectItem<T>;
  onChange: (value: ISelectItem<T>) => void;
}

export const Select= <T,>({
  className,
  items,
  selected,
  onChange,
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
      <button className={styles.button} onClick={handleOpen} type="button">
        <Image
          src={selected.image}
          alt={selected.name}
          width={40}
          height={26}
        />
        <IconArraw className={styles.arrow} />
      </button>
      <div className={styles.box}>
        <div className={styles.list}>
          {items.map((item, index) => (
            <button
              type="button"
              key={index}
              className={styles.select_button}
              onClick={() => handleSelect(item)}
            >
              <Image src={item.image} alt={item.name} width={40} height={26} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
