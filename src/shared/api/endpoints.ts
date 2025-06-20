type TMethods = "GET" | "POST" | "PUT" | "DELETE";

type TEndpointsPt = {
  method: TMethods;
  url: string;
  auth: boolean;
};

export const ENDPOINTS = {
  //auth
  steamLogin: {
    method: "GET",
    url: "/auth/steam-login",
    auth: false,
  },
  steamCallback: {
    method: "GET",
    url: "/auth/steam-callback",
    auth: false,
  },
  logout: {
    method: "POST",
    url: "/auth/logout",
    auth: false,
  },
  checkAccess: {
    method: "POST",
    url: "/auth/check-access",
    auth: true,
  },
  checkRefresh: {
    method: "POST",
    url: "/auth/check-refresh",
    auth: true,
  },

  // skins
  filters: {
    method: "GET",
    url: "/filters",
    auth: false,
  },

  skins: {
    method: "GET",
    url: "/skins",
    auth: false,
  },
  skin: {
    method: "GET",
    url: "/skins/skin", // + query game + slug
    auth: false,
  },
  weekly: {
    method: "GET",
    url: "/skins/best-this-week",
    auth: false,
  },
  lastBuy: {
    method: "GET",
    url: "/skins/last-buy",
    auth: false,
  },

  //cart
  cart: {
    method: "GET",
    url: "/cart",
    auth: true,
  },
  addToCart: {
    method: "POST",
    url: "/cart/add",
    auth: true,
  },
  removeToCart: {
    method: "DELETE",
    url: "/cart/remove",
    auth: true,
  },
  clearCart: {
    method: "DELETE",
    url: "/cart/clear",
    auth: true,
  },

  // user
  changeCurrency: {
    method: "POST",
    url: "/user/change-currency",
    auth: true,
  },

  update: {
    method: "POST",
    url: "/user/update",
    auth: true,
  },

  sendActivate: {
    method: "POST",
    url: "/user/send-activate-email",
    auth: true,
  },

  activate: {
    method: "POST",
    url: "/user/activate",
    auth: false,
  },

  currencyRate: {
    method: "GET",
    url: "/currency",
    auth: false,
  },

  orders: {
    method: "GET",
    url: "/orders",
    auth: true,
  },

  checkout: {
    method: "POST",
    url: "/checkout",
    auth: true,
  },

  statistics: {
    method: "GET",
    url: "/statistics",
    auth: true,
  },
} as const satisfies Record<string, TEndpointsPt>;

export type TEndpoints = (typeof ENDPOINTS)[keyof typeof ENDPOINTS];
