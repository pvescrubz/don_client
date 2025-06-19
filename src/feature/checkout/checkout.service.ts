import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiFetch } from "@/shared/lib/apiFetch";
import { ICheckoutData, ICheckoutRes } from "./checkout.type";

class CheckoutService {
  async checkout(data: ICheckoutData): Promise<ICheckoutRes> {
    try {
      return await apiFetch<ICheckoutRes>({
        endpoint: ENDPOINTS.checkout,
        body: data,
      });
    } catch (error) {
      console.error("Ошибка при оплате:", error);
      throw error;
    }
  }
}

export const checkoutService = new CheckoutService();
