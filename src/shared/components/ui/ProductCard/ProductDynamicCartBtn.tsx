"use client";

import { TButton } from "@/shared/typing/elements.type";
import dynamic from "next/dynamic";
import { FC } from "react";
import { IconCartSmall } from "../svg/IconCartSmall";
import styles from './ProductCard.module.css';

const ProductCardBtn = dynamic(() => import("./ProductCardBtn"), {
  ssr: false,
  loading: () => (
    <button className={styles.button}>
      <IconCartSmall /> В корзину
    </button>
  ),
});

interface IProductDynamicCartBtn extends TButton {
  skinId: string;
}

export const ProductDynamicCartBtn: FC<IProductDynamicCartBtn> = ({
  skinId,
  className,
  ...rest
}) => {
  return <ProductCardBtn skinId={skinId} className={className} {...rest} />;
};
