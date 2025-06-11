import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiFetch } from "@/shared/lib/apiFetch";
import { IUser } from "./user.type";

class UserService {
  async changeCurrency(): Promise<IUser> {
    try {
      const res = await apiFetch<IUser>({
        endpoint: ENDPOINTS.changeCurrency,
      });

      return res;
    } catch (error) {
      console.error("Ошибка при очистке корзины:", error);
      throw error;
    }
  }
}

export const userService = new UserService();
