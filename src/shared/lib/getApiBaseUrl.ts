import { CONFIG } from "../model/config";

export const getApiBaseUrl = (isServerReq: boolean) => {
  return !isServerReq ? CONFIG.API_BASE_URL_CLIENT : CONFIG.API_BASE_URL_SERVER;
};
