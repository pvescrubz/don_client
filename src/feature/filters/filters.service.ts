import { IFilters } from "@/feature/filters/filters.type";
import { ENDPOINTS } from "@/shared/api/endpoints";
import { apiFetch } from "@/shared/lib/apiFetch";


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
