import { IRequestOptions, midFetch } from "./midFetch";

export async function apiFetch<T>(options: IRequestOptions): Promise<T> {
  const response = await midFetch(options);


  if (!response.ok) {
    const error = await response.json();

    const message =
      typeof error === "string"
        ? error
        : error?.error || error?.message || "Произошла ошибка";

    throw new Error(message);
  }

  return await response.json();
}
