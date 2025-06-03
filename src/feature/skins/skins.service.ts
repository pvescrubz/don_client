import { apiFetch } from "@/shared/lib/apiFetch";
import { ENDPOINTS } from "@/shared/lib/endpoints";
import { TQuery } from "@/shared/typing/query.type";
import { ICatalogSkin, TCatalogRes, TSkin } from "./skins.type";

class SkinsService {
  async getSkins(
    game: string = "cs2",
    query: TQuery,
    isMobile: boolean = false
  ): Promise<TCatalogRes | null> {
    if (isMobile) query.perPage = "20";

    try {
      const data = await apiFetch<TCatalogRes>({
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
