type TMethods = "GET" | "POST" | "PUT" | "DELETE";

type TEndpointsPt = {
  method: TMethods;
  url: string;
};

export const ENDPOINTS = {
  steamLogin: {
    method: "GET",
    url: "/api/auth/steam-login",
  },
  steamCallback: {
    method: "GET",
    url: "/api/auth/steam-callback",
  },
  logout: {
    method: "POST",
    url: "/api/auth/logout",
  },
  checkAccess: {
    method: "POST",
    url: "/api/auth/check-access",
  },
  checkRefresh: {
    method: "POST",
    url: "/api/auth/check-refresh",
  },
} as const satisfies Record<string, TEndpointsPt>;

export type TEndpoints = (typeof ENDPOINTS)[keyof typeof ENDPOINTS];
