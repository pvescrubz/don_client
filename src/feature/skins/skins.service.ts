import { apiFetch } from "@/shared/lib/apiFetch";
import { ENDPOINTS } from "@/shared/lib/endpoints";
import { TQuery } from "@/shared/typing/query.type";
import { TCatalogRes } from "./skins.type";

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
}

export const skinsService = new SkinsService();
