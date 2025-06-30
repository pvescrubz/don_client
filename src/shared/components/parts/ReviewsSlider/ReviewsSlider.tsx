"use client";

import Image from "next/image";
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
          speed={1500}
          spaceBetween={20}
          loop={true}
          grabCursor={true}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className={"slide-rev"}>
              <div className={styles.reviewBox}>
                <div className={styles.reviewHeader}>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
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
