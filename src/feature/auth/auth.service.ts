import { apiFetch } from "@/shared/lib/apiFetch";
import { ENDPOINTS } from "@/shared/lib/endpoints";
import { IUser } from "../user/user.type";

class AuthService {
  async checkAuth(): Promise<IUser> {
    try {
      const resp = await apiFetch<IUser>({ endpoint: ENDPOINTS.checkAccess });

      return resp;
    } catch (error) {
      console.error("Auth check failed:", error);
      throw error;
    }
  }
  async logout(): Promise<void> {
    try {
      await apiFetch({ endpoint: ENDPOINTS.logout });
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }
}

export const authService = new AuthService();
