import { ENDPOINTS, TEndpoints } from "./endpoints";

interface TRequestOptions {
  endpoint: TEndpoints;
  body?: unknown;
  headers?: Record<string, string>;
}

export async function apiFetch(
  options: TRequestOptions,
  auth: boolean = true
): Promise<Response> {
  const { endpoint, body, headers } = options;
  const { method, url } = endpoint;

  const isGetOrDelete = method === "GET";

  const makeRequest = async (): Promise<Response> => {
    return fetch(`${process.env.NEXT_PUBLIC_BACK_URL}${url}`, {
      method,
      ...(isGetOrDelete
        ? {}
        : { body: body ? JSON.stringify(body) : JSON.stringify({}) }),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      credentials: "include",
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
