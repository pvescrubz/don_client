import { ENDPOINTS, TEndpoints } from "../api/endpoints";
import { TQuery } from "../typing/query.type";
import { buildQueryString } from "./buildQueryString";

export interface IRequestOptions {
  endpoint: TEndpoints;
  query?: TQuery;
  params?: string;
  body?: unknown;
  headers?: Record<string, string>;
  cacheTime?: number;
}

export async function midFetch(options: IRequestOptions): Promise<Response> {
  const { endpoint, body, headers, query, params, cacheTime } = options;
  const { method, url, auth } = endpoint;

  const isGetOrDelete = method === "GET";

  let requestUrl = process.env.NEXT_PUBLIC_BACK_URL + url;

  if (params) requestUrl += `/${params}`;

  const queryString = buildQueryString(query);
  if (queryString) requestUrl += `?${queryString}`;

  const makeRequest = async (): Promise<Response> => {
    return fetch(requestUrl, {
      method,
      ...(isGetOrDelete
        ? {}
        : { body: body ? JSON.stringify(body) : JSON.stringify({}) }),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      credentials: "include",
      ...(cacheTime && { next: { revalidate: cacheTime } }),
    });
  };

  if (!auth) {
    return makeRequest();
  }

  const response = await makeRequest();

  if (response.ok) {
    return response;
  }

  if (response.status !== 401) {
    return response;
  }

  const refreshRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_URL}${ENDPOINTS.checkRefresh.url}`,
    {
      method: ENDPOINTS.checkRefresh.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );

  if (!refreshRes.ok) {
    return refreshRes;
  }

  if (url === ENDPOINTS.checkAccess.url) {
    return refreshRes;
  }

  return makeRequest();
}
