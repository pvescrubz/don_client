"use client";
import { FC } from "react";

import { useAnimatedCounter } from "@/shared/hooks/useAnimatedCounter";
import styles from "./StatisticsItem.module.css";

export interface IStatisticsItem {
  label: string;
  value: number;
  hasStarted: boolean;
}

export const StatisticsItem: FC<IStatisticsItem> = ({
  label,
  value,
  hasStarted,
}) => {
  const animValue = useAnimatedCounter(value, 1200, hasStarted);

  return (
    <div className={styles.root}>
      <p className={styles.numbers}>
        {hasStarted ? animValue.toLocaleString() : "0"}
      </p>
      <p className={styles.text}>{label}</p>
    </div>
  );
};
