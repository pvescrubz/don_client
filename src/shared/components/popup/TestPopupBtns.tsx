// src/shared/components/ShowBonusPopupButton.tsx
"use client";
import { showModal } from "@/shared/lib/showModal";
import toast from "react-hot-toast";


export const ShowBonusPopupButton = () => {
  const handleClick = async () => {
    try {
      await showModal("BonusPopup", {
       
      });
      
      
    } catch (error) {
      console.log(error);
    }
    finally {
      toast.success("12312312");
  };


}

const showhui = () => {
  toast.success("12312312");
};

  return (
    <>
    <button onClick={handleClick} className="your-button-style">
      Показать бонус
    </button>
    <button onClick={showhui} className="your-button-style">
      Показать бонус
    </button>
    </>
  );
};