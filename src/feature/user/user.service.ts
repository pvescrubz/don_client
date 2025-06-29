import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiFetch } from "@/shared/lib/apiFetch";
import { IUpdateData, IUser } from "./user.type";

class UserService {
  async changeCurrency(): Promise<IUser> {
    try {
      const res = await apiFetch<IUser>({
        endpoint: ENDPOINTS.changeCurrency,
      });

      return res;
    } catch (error) {
      console.error("Ошибка при изменении валюты:", error);
      throw error;
    }
  }

  async update(data: IUpdateData): Promise<IUser> {
    try {
      const res = await apiFetch<IUser>({
        endpoint: ENDPOINTS.update,
        body: data,
      });

      return res;
    } catch (error) {
      console.error("Ошибка при обновлении профиля:", error);
      throw error;
    }
  }

  async sendActivateEmail(): Promise<{ success: boolean }> {
    try {
      const res = await apiFetch<{ success: boolean }>({
        endpoint: ENDPOINTS.sendActivate,
      });

      return res;
    } catch (error) {
      console.error("Ошибка при отправке пиьсма с активацией:", error);
      throw error;
    }
  }
  async activate(token: string): Promise<{ success: boolean }> {
    try {
      const res = await apiFetch<{ success: boolean }>({
        endpoint: ENDPOINTS.activate,
        body: { token },
      });

      return res;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Ошибка при активации аккаунта:", error.message);
      }
      throw error;
    }
  }
}

export const userService = new UserService();
