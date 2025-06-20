import { useEffect } from "react";
import toast, { Toaster, useToaster } from "react-hot-toast";

export const MyToaster = () => {
  const { toasts } = useToaster();
  useEffect(() => {
    if (toasts.length > 3) {
      toasts.forEach((item, index) => {
        if (index > 2) {
          toast.remove(item.id);
        }
      });
    }
  }, [toasts]);

  return (
    <Toaster
      toastOptions={{
        duration: 3000,
        style: {
          fontFamily: "var(--font-family)",
          fontWeight: "500",
        },
      }}
      position="top-left"
    />
  );
};
