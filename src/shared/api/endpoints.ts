type TMethods = "GET" | "POST" | "PUT" | "DELETE";

type TEndpointsPt = {
  method: TMethods;
  url: string;
  auth: boolean;
};

export const ENDPOINTS = {
  steamLogin: {
    method: "GET",
    url: "/api/auth/steam-login",
    auth: false,
  },
  steamCallback: {
    method: "GET",
    url: "/api/auth/steam-callback",
    auth: false,
  },
  logout: {
    method: "POST",
    url: "/api/auth/logout",
    auth: false,
  },
  checkAccess: {
    method: "POST",
    url: "/api/auth/check-access",
    auth: true,
  },
  checkRefresh: {
    method: "POST",
    url: "/api/auth/check-refresh",
    auth: true,
  },
  filters: {
    method: "GET",
    url: "/api/filters",
    auth: false,
  },

  skins: {
    method: "GET",
    url: "/api/skins",
    auth: false,
  },
  skin: {
    method: "GET",
    url: "/api/skins/skin", // + query game + slug
    auth: false,
  },
  weekly: {
    method: "GET",
    url: "/api/skins/best-this-week",
    auth: false,
  },
  lastBuy: {
    method: "GET",
    url: "/api/skins/last-buy",
    auth: false,
  },

  cart: {
    method: "GET",
    url: "/api/cart",
    auth: true,
  },
  addToCart: {
    method: "POST",
    url: "/api/cart/add",
    auth: true,
  },
  removeToCart: {
    method: "DELETE",
    url: "/api/cart/remove",
    auth: true,
  },
  clearCart: {
    method: "DELETE",
    url: "/api/cart/clear",
    auth: true,
  },
} as const satisfies Record<string, TEndpointsPt>;

export type TEndpoints = (typeof ENDPOINTS)[keyof typeof ENDPOINTS];
