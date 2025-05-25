import { TQuery } from "../typing/query.type";

export function buildQueryString(query: TQuery | undefined): string {
  if (!query || typeof query !== "object") return "";

  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null) {
      searchParams.append(key, value);
    }
  }

  return searchParams.toString();
}
