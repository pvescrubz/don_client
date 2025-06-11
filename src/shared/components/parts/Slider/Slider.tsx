"use client";

import { ICatalogSkin } from "@/feature/skins/skins.type";
import { useIsClient } from "@/shared/hooks/useIsClient";
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
  const { clientSide } = useIsClient();

  return (
    <>
      {clientSide && items && (
        <Swiper
          modules={[Mousewheel, Autoplay]}
          slidesPerView={"auto"}
          speed={3000}
          spaceBetween={10}
          breakpoints={{
            768: { spaceBetween: 20 },
          }}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className={"slide"}>
              <div className={styles.box}>
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
