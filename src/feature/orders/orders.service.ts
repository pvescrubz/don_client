import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiFetch } from "@/shared/lib/apiFetch";
import { IOrder } from "./orders.type";

class OrdersService {
  async getOrders(): Promise<IOrder[] | null> {
    try {
      const data = await apiFetch<IOrder[]>({
        endpoint: ENDPOINTS.orders,
      });

      return data;
    } catch (error) {
      console.error("Ошибка при получении рейтов валют:", error);
      throw error;
    }
  }
}

export const ordersService = new OrdersService();
