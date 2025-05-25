import { IRequestOptions, midFetch } from "./midFetch";

export async function apiFetch<T>(options: IRequestOptions): Promise<T> {
  const response = await midFetch(options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} - ${errorText}`);
  }

  return await response.json();
}
