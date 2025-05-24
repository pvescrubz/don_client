// src/shared/components/ShowBonusPopupButton.tsx
"use client";
import { showModal } from "@/shared/lib/showModal";


export const ShowBonusPopupButton = () => {
  const handleClick = async () => {
    try {
      await showModal("CouponPopup", {
      });
    } catch (error) {
      console.log(error);
    }
}

  return (
    <>
    <button
        onClick={handleClick}
        style={{
          position: 'fixed', // 1. 'fixed' should be a string
          top: 0,
          // You might want to add left, right, or zIndex for better positioning
          left: '20px', // Example
          zIndex: 10000, // Example: ensure it's above other content
          padding: '10px 15px', // Example styling
          backgroundColor: 'lightblue', // Example styling
          border: 'none', // Example styling
          borderRadius: '5px' // Example styling
        }}
      >
        Показать бонус
      </button>
    </>
  );
};