import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiFetch } from "@/shared/lib/apiFetch";
import { IStatistics } from "./statistics.type";

class StatisticsService {
  async get(): Promise<IStatistics | null> {
    try {
      const data = await apiFetch<IStatistics>({
        endpoint: ENDPOINTS.statistics,
      });

      return data;
    } catch (error) {
      console.error("Ошибка при получении рейтов валют:", error);
      return null
    }
  }
}

export const statisticsService = new StatisticsService();
