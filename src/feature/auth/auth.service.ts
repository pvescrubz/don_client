import { ENDPOINTS } from "@/shared/lib/endpoints";
import { midFetch } from "@/shared/lib/midFetch";
import { TUser } from "../user/user.type";

class AuthService {
  async checkAuth(): Promise<TUser> {
    try {
      const resp = await midFetch({ endpoint: ENDPOINTS.checkAccess });

      if (!resp.ok) {
        const errData = await resp.json();
        throw new Error(errData.error || "Unauthorized");
      }

      return await resp.json();
    } catch (error) {
      console.error("Auth check failed:", error);
      throw error;
    }
  }
  async logout(): Promise<void> {
    try {
      const resp = await midFetch({ endpoint: ENDPOINTS.logout });

      if (!resp.ok) {
        const errData = await resp.json();
        throw new Error(errData.error || "Ошибка при выходе");
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      throw error;
    }
  }
}

export const authService = new AuthService();
