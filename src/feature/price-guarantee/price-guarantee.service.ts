import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiFetch } from "@/shared/lib/apiFetch";
import { IPriceGuaranteeData } from "./price-guarantee.type";

class PriceGuaranteeService {
  async send(data: IPriceGuaranteeData): Promise<{ success: boolean }> {
    try {
      return await apiFetch<{ success: boolean }>({
        endpoint: ENDPOINTS.priceGuarantee,
        body: data,
      });
    } catch (error) {
      console.error("Ошибка при получении рейтов валют:", error);
      throw error;
    }
  }
}

export const priceGuaranteeService = new PriceGuaranteeService();
