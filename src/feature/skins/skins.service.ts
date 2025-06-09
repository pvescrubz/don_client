import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiFetch } from "@/shared/lib/apiFetch";
import { TQuery } from "@/shared/typing/query.type";
import { ICatalogRes, ICatalogSkin, TSkin } from "./skins.type";

class SkinsService {
  async getSkins(
    game: string = "cs2",
    query: TQuery,
    isMobile: boolean = false
  ): Promise<ICatalogRes | null> {
    if (isMobile) query.perPage = "20";

    try {
      const data = await apiFetch<ICatalogRes>({
        endpoint: ENDPOINTS.skins,
        query: { ...query, game: game },
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении скинов:", error);
      return null;
    }
  }
  async getSkinBySlug(slug: string): Promise<TSkin | null> {
    try {
      const data = await apiFetch<TSkin>({
        endpoint: ENDPOINTS.skin,
        query: { slug },
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении скинов:", error);
      return null;
    }
  }

  async getWeeklyProducts(): Promise<ICatalogSkin[] | null> {
    try {
      const data = await apiFetch<ICatalogSkin[]>({
        endpoint: ENDPOINTS.weekly,
        // cacheTime: 60 * 60,
        cacheTime: 1,
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении скинов:", error);
      return null;
    }
  }
  async getLastBuy(): Promise<ICatalogSkin[] | null> {
    try {
      const data = await apiFetch<ICatalogSkin[]>({
        endpoint: ENDPOINTS.lastBuy,
        // cacheTime: 60 * 5,
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении скинов:", error);
      return null;
    }
  }
}

export const skinsService = new SkinsService();
