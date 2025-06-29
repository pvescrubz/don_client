import { useRemoveFormCart } from "@/feature/cart/useRemoveFromCart";
import { IconDelete } from "@/shared/components/ui/svg/IconDelete";
import { Spinner } from "@/shared/components/ui/svg/Spiner";
import { TButton } from "@/shared/typing/elements.type";
import { FC } from "react";

interface ICartListItemBtn extends TButton {
  skinId: string;
}

export const CartListItemDelete: FC<ICartListItemBtn> = ({
  skinId,
  className,
  ...rest
}) => {
  const { remove, removeIsPending } = useRemoveFormCart(skinId);
  const handleClick = () => {
    remove();
  };

  return (
    <button
      className={className}
      {...rest}
      onClick={handleClick}
      disabled={removeIsPending}
    >
      {!removeIsPending && <IconDelete />}
      {removeIsPending && <Spinner />}
    </button>
  );
};
