"use client";

import { RefObject, useEffect, useState } from "react";

interface IActiveModal {
  id: string;
  ref?: RefObject<HTMLElement | null> | null;
}

const activeModalIds: IActiveModal[] = [];

export const useStopScroll = (
  condition: boolean,
  id: string,
  ref?: RefObject<HTMLElement | null>
) => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const hasScroll =
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight;
    if (!hasScroll) return;

    const getScrollWidth = () => {
      const div = document.createElement("div");
      div.style.overflowY = "scroll";
      div.style.width = "50px";
      div.style.height = "50px";

      document.body.append(div);
      const scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();

      return scrollWidth;
    };

    const width = getScrollWidth();
    setScrollWidth(width);
  }, [condition]);

  useEffect(() => {
    const hasScroll =
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight;
    if (!hasScroll) return;

    if (condition) {
      activeModalIds.push({ id, ref: ref || null });
      if (activeModalIds.length === 1) {
        document.body.classList.add("stop__scroll");
        document.body.style.paddingRight = `${scrollWidth}px`;
      }
    } else {
      const index = activeModalIds.findIndex((modal) => modal.id === id);
      if (index !== -1) {
        activeModalIds.splice(index, 1);
      }
      if (activeModalIds.length === 0) {
        document.body.classList.remove("stop__scroll");
        document.body.style.paddingRight = "0px";
      }
    }

    return () => {
      const index = activeModalIds.findIndex((modal) => modal.id === id);
      if (index !== -1) {
        activeModalIds.splice(index, 1);
      }
      if (activeModalIds.length === 0) {
        document.body.classList.remove("stop__scroll");
        document.body.style.paddingRight = "0px";
      }
    };
  }, [condition, scrollWidth, id, ref]);
};
