'use client';
import { useEffect, useRef } from 'react';

interface ISliderProps {
  children: React.ReactNode; // Тип для дочерних элементов
  height: string; // Высота слайдера
  cardWidth: number; // Ширина одной карточки
  gap: number; // Расстояние между карточками
  autoScrollSpeed?: number; // Скорость автопрокрутки (в пикселях в секунду)
}

export const SliderPosts: React.FC<ISliderProps> = ({
  children,
  height,
  cardWidth,
  gap,
  autoScrollSpeed = 190, // Значение по умолчанию: 50 пикселей в секунду
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let scrollInterval: NodeJS.Timeout | null = null;
    let isScrollingForward = true; // Флаг направления прокрутки

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider) {
          if (isScrollingForward) {
            // Прокручиваем вперед
            slider.scrollBy({
              left: 1, // Прокручиваем на 1 пиксель за раз
              behavior: 'smooth',
            });

            // Если достигнут конец, меняем направление
            if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
              isScrollingForward = false;
            }
          } else {
            // Прокручиваем назад
            slider.scrollBy({
              left: -1, // Прокручиваем на 1 пиксель назад
              behavior: 'smooth',
            });

            // Если достигнуто начало, меняем направление
            if (slider.scrollLeft <= 0) {
              isScrollingForward = true;
            }
          }
        }
      }, 1000 / autoScrollSpeed); // Рассчитываем интервал на основе скорости
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [autoScrollSpeed]);

  return (
    <div
      ref={sliderRef}
      style={{
        display: 'flex',
        overflowX: 'hidden', // Скрываем полосу прокрутки
        scrollBehavior: 'smooth',
        height: height,
        gap: `${gap}px`, // Расстояние между карточками
        padding: `0 ${gap}px`, // Добавляем отступы по краям
      }}
      className="custom-slider"
    >
      {Array.isArray(children) &&
        children.map((child, index) => (
          <div
            key={index}
            style={{
              minWidth: `${cardWidth}px`, // Фиксированная ширина карточки
              height: '100%',
              flexShrink: 0, // Предотвращаем сжатие карточек
            }}
          >
            {child}
          </div>
        ))}
    </div>
  );
};