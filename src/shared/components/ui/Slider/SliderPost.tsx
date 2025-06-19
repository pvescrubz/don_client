"use client";
import { ReactNode, useEffect, useRef } from "react";

interface ISliderProps {
  children: ReactNode;
  height: string;
  cardWidth: number;
  gap: number;
  autoScrollSpeed?: number;
}

export const SliderPosts: React.FC<ISliderProps> = ({
  children,
  height,
  cardWidth,
  gap,
  autoScrollSpeed = 190,
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let scrollInterval: NodeJS.Timeout | null = null;
    let isScrollingForward = true;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider) {
          if (isScrollingForward) {
            slider.scrollBy({
              left: 1,
              behavior: "smooth",
            });

            if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
              isScrollingForward = false;
            }
          } else {
            slider.scrollBy({
              left: -1,
              behavior: "smooth",
            });

            if (slider.scrollLeft <= 0) {
              isScrollingForward = true;
            }
          }
        }
      }, 1000 / autoScrollSpeed);
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
        display: "flex",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        height: height,
        gap: `${gap}px`,
        padding: `0 ${gap}px`,
      }}
      className="custom-slider"
    >
      {Array.isArray(children) &&
        children.map((child, index) => (
          <div
            key={index}
            style={{
              minWidth: `${cardWidth}px`,
              height: "100%",
              flexShrink: 0,
            }}
          >
            {child}
          </div>
        ))}
    </div>
  );
};
