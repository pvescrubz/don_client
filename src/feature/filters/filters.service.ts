import { IFilters } from "@/feature/filters/filters.type";
import { apiFetch } from "@/shared/lib/apiFetch";
import { ENDPOINTS } from "@/shared/lib/endpoints";


class FiltersService {
  async getFilters(game: string = 'cs'): Promise<IFilters | null> {
    try {
      const data = await apiFetch<IFilters>({
        endpoint: ENDPOINTS.filters,
        params: game,
    
      });

      return data;
    } catch (error) {
      console.error("Ошибка при получении фильтров:", error);
      return null;
    }
  }
}

export const filtersService = new FiltersService();
