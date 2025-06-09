"use client";

import { TButton } from "@/shared/typing/elements.type";
import dynamic from "next/dynamic";
import { FC } from "react";

const ProductCardBtn = dynamic(() => import("./ProductCardBtn"), {
  ssr: false,
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
