import { headers } from "next/headers";

export async function getReferrerGame(): Promise<string | null> {
  const referer = (await headers()).get("referer");

  if (!referer) return null;

  try {
    const url = new URL(referer);
    const pathname = url.pathname;
    const segments = pathname.split("/").filter(Boolean);
    return segments[1] || null;
  } catch (error) {
    console.error("Invalid referer URL:", error);
    return null;
  }
}

export function shouldUpdateFilters(
  referrerGame: string | null,
  currentGame: string
): boolean {
  return referrerGame !== currentGame;
}
