"use client";
import { FC, useEffect, useRef, useState } from "react";

import { IStatistics } from "../../../../../feature/statistics/statistics.type";
import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
import styles from "./StatisticsList.module.css";

interface IStatisticsList {
  stats: IStatistics;
}

export const StatisticsList: FC<IStatisticsList> = ({ stats }) => {
  const statsItems = [
    { label: "ЗА ВСЕ ВРЕМЯ", value: stats.total },
    { label: "ЗА МЕСЯЦ", value: stats.monthly },
    { label: "ЗА НЕДЕЛЮ", value: stats.weekly },
    { label: "ЗА СЕГОДНЯ", value: stats.daily },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.root} ref={ref}>
      {statsItems.map((item, index) => (
        <StatisticsItem
          key={index}
          label={item.label}
          value={Number(item.value)}
          hasStarted={isVisible}
        />
      ))}
    </div>
  );
};
