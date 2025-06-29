import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiFetch } from "@/shared/lib/apiFetch";
import { ICartRes } from "./cart.type";

class СartService {
  async getCart(): Promise<ICartRes | null> {
    try {
      const data = await apiFetch<ICartRes>({
        endpoint: ENDPOINTS.cart,
      });

      return data;
    } catch (error) {
      console.error("Ошибка при получении корзины:", error);
      return null;
    }
  }

  async addToCart(skinId: string): Promise<ICartRes | null> {
    try {
      const data = await apiFetch<ICartRes>({
        endpoint: ENDPOINTS.addToCart,
        body: { skinId },
      });

      return data;
    } catch (error) {
      console.error("Ошибка при добавлении товара в корзину:", error);
      throw error;
    }
  }
  async removeToCart(skinId: string): Promise<ICartRes | null> {
    try {
      const data = await apiFetch<ICartRes>({
        endpoint: ENDPOINTS.removeToCart,
        body: { skinId },
      });

      return data;
    } catch (error) {
      console.error("Ошибка при удалении товара из корзины:", error);
      throw error;
    }
  }
  async clearCart(): Promise<ICartRes | null> {
    try {
      const data = await apiFetch<ICartRes>({
        endpoint: ENDPOINTS.clearCart,
      });

      return data;
    } catch (error) {
      console.error("Ошибка при очистке корзины:", error);
      throw error;
    }
  }

}

export const cartService = new СartService();
