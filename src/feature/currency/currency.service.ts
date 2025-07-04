import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiFetch } from "@/shared/lib/apiFetch";
import { ICurrencyRate } from "./currency.type";

class CurrencyService {
  async getRates(): Promise<ICurrencyRate | null> {
    try {
      const data = await apiFetch<ICurrencyRate>({
        endpoint: ENDPOINTS.currencyRate,
        cacheTime: 1800,
      });

      return data;
    } catch (error) {
      console.error("Ошибка при получении рейтов валют:", error);
      throw error;
    }
  }
}

export const currencyService = new CurrencyService();
