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
        cacheTime: 60 * 60,
        query: { ...query, game: game },
        isServerFn: true,
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении скинов для каталога:", error);
      return null;
    }
  }

  async getSkinBySlug(
    slug: string,
    isServerFn: boolean = false
  ): Promise<TSkin | null> {
    try {
      const data = await apiFetch<TSkin>({
        endpoint: ENDPOINTS.skin,
        query: { slug },
        cacheTime: 60,
        isServerFn,
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении скина по slug:", error);
      return null;
    }
  }

  async getWeeklyProducts(): Promise<ICatalogSkin[] | null> {
    try {
      const data = await apiFetch<ICatalogSkin[]>({
        endpoint: ENDPOINTS.weekly,
        cacheTime: 3600 * 24,
        isServerFn: true,
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении товаров недели:", error);
      return null;
    }
  }
  async getLastBuy(): Promise<ICatalogSkin[] | null> {
    try {
      const data = await apiFetch<ICatalogSkin[]>({
        endpoint: ENDPOINTS.lastBuy,
        cacheTime: 60 * 3,
        isServerFn: true,
      });
      return data;
    } catch (error) {
      console.error("Ошибка при получении последний покупок:", error);
      return null;
    }
  }
}

export const skinsService = new SkinsService();
