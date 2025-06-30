export function getCookie<T extends string | boolean>(name: string): T | null {
  if (typeof document === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(";").shift();
    if (cookieValue) {
      const decodedValue = decodeURIComponent(cookieValue);

      if (decodedValue === 'true') return true as T;
      if (decodedValue === 'false') return false as T;

      return decodedValue as T;
    }
  }
  return null;
}

export function setCookie(
  name: string,
  value: string,
  options: {
    days?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: "Strict" | "Lax" | "None";
  } = {}
) {
  const {
    days = 7,
    path = "/",
    secure = false,
    sameSite = "Lax",
    domain,
  } = options;

  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}${expires}`;
  cookieString += `; path=${path}`;

  if (domain) {
    cookieString += `; domain=${domain}`;
  }

  if (secure) {
    cookieString += "; Secure";
  }

  if (sameSite) {
    cookieString += `; SameSite=${sameSite}`;
  }

  document.cookie = cookieString;
}
