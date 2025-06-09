"use client";

import dynamic from "next/dynamic";
import { FC } from "react";

const Cart = dynamic(() => import("@/shared/components/sections/Cart/Cart"), {
  ssr: false,
});

export const CartPage: FC = () => {
  return <Cart />;
};
export default CartPage;
