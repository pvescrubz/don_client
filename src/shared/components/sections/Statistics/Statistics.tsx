'use client'
import { TDiv } from '@/shared/typing/elements.type';
import { FC, useEffect, useRef, useState } from 'react';
import { Container } from '../../ui/containers/Container/Container';
import { Section } from '../../ui/containers/Section/Section';
import { Title } from '../../ui/Title/Title';
import styles from './Statistics.module.css';




export const Statistic: FC<TDiv> = () => {

  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  const useAnimatedCounter = (end: number, duration = 1200) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!hasStarted) return;

      let start = 0;
      const incrementTime = Math.random() * 50 + 100;

      const timer = setInterval(() => {
        start += Math.ceil((end / duration) * incrementTime);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [end, duration, hasStarted]);

    return count;
  };

 
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
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

  
  const getDayOfYear = () => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diffTime = today.getTime() - startOfYear.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const dayOfYear = getDayOfYear();

  // ==== Сохраняем статистику в localStorage по дням ====
  const [cachedStats, setCachedStats] = useState<{
    totalAllTime: number;
    totalMonth: number;
    totalWeek: number;
    today: number;
  }>({
    totalAllTime: 0,
    totalMonth: 0,
    totalWeek: 0,
    today: 0,
  });

  useEffect(() => {
    const storedDay = localStorage.getItem('lastStatsDay');
    const storedData = localStorage.getItem('cachedStats');

    if (storedDay && parseInt(storedDay) === dayOfYear && storedData) {
      setCachedStats(JSON.parse(storedData));
    } else {
      const stats = calculateStats(dayOfYear);
      localStorage.setItem('cachedStats', JSON.stringify(stats));
      localStorage.setItem('lastStatsDay', dayOfYear.toString());
      setCachedStats(stats);
    }
  }, [dayOfYear]);

  
  const calculateStats = (day: number) => ({
    totalAllTime: 22_543_456 + day * 17,
    totalMonth: 1_223_543 + (day % 30) * 3_740,
    totalWeek: 243_433 + ((new Date().getDay() || 7) % 7) * 1_000,
    today: 7000 + (day % 60) * 83,
  });

  
  const totalAllTime = useAnimatedCounter(cachedStats.totalAllTime);
  const totalMonth = useAnimatedCounter(cachedStats.totalMonth);
  const totalWeek = useAnimatedCounter(cachedStats.totalWeek);
  const today = useAnimatedCounter(cachedStats.today);

  
  return (
    <Section>
      <Container>
        <Title>Продано ВСЕГО</Title>
        <div className={styles.wrapper} ref={ref}>
          <div className={styles.wrapper_item}>
            <p className={styles.text_big}>{isVisible ? totalAllTime.toLocaleString() : '0'}</p>
            <p className={styles.text_small}>ЗА ВСЕ ВРЕМЯ</p>
          </div>

          <div className={styles.wrapper_item}>
            <p className={styles.text_big}>{isVisible ? totalMonth.toLocaleString() : '0'}</p>
            <p className={styles.text_small}>ЗА МЕСЯЦ</p>
          </div>

          <div className={styles.wrapper_item}>
            <p className={styles.text_big}>{isVisible ? totalWeek.toLocaleString() : '0'}</p>
            <p className={styles.text_small}>ЗА НЕДЕЛЮ</p>
          </div>

          <div className={styles.wrapper_item}>
            <p className={styles.text_big}>{isVisible ? today.toLocaleString() : '0'}</p>
            <p className={styles.text_small}>ЗА СЕГОДНЯ</p>
          </div>
        </div>

        
      </Container>
    </Section>
  );
};