"use client";

import { ICatalogSkin } from "@/feature/skins/skins.type";
import { FC } from "react";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import { Autoplay, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../../ui/ProductCard/ProductCard";
import "./Slider.css";
import styles from "./Slider.module.css";

interface ISlider {
  items: ICatalogSkin[];
}

const Slider: FC<ISlider> = ({ items }) => {
  return (
    <>
      {items && (
        <Swiper
          modules={[Mousewheel, Autoplay]}
          slidesPerView={"auto"}
          initialSlide={3}
          speed={6000}
          spaceBetween={10}
          breakpoints={{
            768: { spaceBetween: 20 },
          }}
          loop={true}
          // loopAddBlankSlides={true}
          // centeredSlides={true}
          roundLengths={true}
          grabCursor={true}
          autoplay={{
            delay: 0.1,

            pauseOnMouseEnter: true,
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className={"slide"}>
              <div className={styles.reviwe__wrapper}>
                <ProductCard skin={item} className={styles.card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
