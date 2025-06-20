"use client";

import {
  FC,
  useEffect,
  useRef,
  useState
} from "react";
import styles from "./SpeedDial.module.css";
import { SpeedDialButton } from "./SpeedDialButton/SpeedDialButton";
import { SpeedDialList } from "./SpeedDialList/SpeedDialList";


export const SpeedDial: FC = () => {
  const [show, setShow] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (!show) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div className={styles.root} ref={ref}>
      <SpeedDialButton show={show} onClick={handleClick} />
      <SpeedDialList show={show} />
    </div>
  );
};
