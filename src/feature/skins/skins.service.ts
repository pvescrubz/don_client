import { apiFetch } from "@/shared/lib/apiFetch";
import { ENDPOINTS } from "@/shared/lib/endpoints";
import { TQuery } from "@/shared/typing/query.type";
import { TCatalogRes, TCatalogSkin } from "./skins.type";

class SkinsService {
  async getSkins(
    game: string = "cs",
    query: TQuery,
    isMobile: boolean = false
  ): Promise<TCatalogRes | null> {
    if (isMobile) query.perPage = "20";

    try {
      const data = await apiFetch<TCatalogRes>({
        endpoint: ENDPOINTS.skins,
        params: game,
        query: query,
        cacheTime: 300,
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении скинов:", error);
      return null;
    }
  }

  async getWeeklyProducts(): Promise<TCatalogSkin[] | null> {
    try {
      const data = await apiFetch<TCatalogSkin[]>({
        endpoint: ENDPOINTS.weekly,
        cacheTime: 60 * 60,
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении скинов:", error);
      return null;
    }
  }
  async getLastBuy(): Promise<TCatalogSkin[] | null> {
    try {
      const data = await apiFetch<TCatalogSkin[]>({
        endpoint: ENDPOINTS.lastBuy,
        cacheTime: 60 * 5,
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении скинов:", error);
      return null;
    }
  }
}

export const skinsService = new SkinsService();
