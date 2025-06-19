/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import { Autoplay, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ReviewsSlider.module.css";
import "./Slider.css";

interface IReview {
  name: string;
  avatar: string;
  comment: string;
}

interface ISlider {
  items: IReview[];
}

const ReviewSlider: FC<ISlider> = ({ items }) => {
  return (
    <>
      {items && (
        <Swiper
          modules={[Mousewheel, Autoplay]}
          slidesPerView="auto"
          speed={5000}
          spaceBetween={20}
          loop={true}

          grabCursor={true}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className={"slide-rev"}>
              <div className={styles.reviewBox}>
                <div className={styles.reviewHeader}>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className={styles.avatar}
                  />
                  <p className={styles.name}>{item.name}</p>
                </div>
                <p className={styles.comment}>{item.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default ReviewSlider;
