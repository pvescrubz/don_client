import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUserStore } from "../user/user.store";
import { authService } from "./auth.service";
import { useAuthStore } from "./auth.store";

export const useLogout = () => {
  const { setIsAuth } = useAuthStore();
  const { setUser } = useUserStore();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      toast.success("Вы успешно вышли из системы!");
      setUser(null);
      setIsAuth(false);
      queryClient.clear();
    },
    onError: (error) => {
      toast.error(error.message || "Ошибка при выходе из системы");
    },
  });

  return { logout: mutate, isPending };
};
