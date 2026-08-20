const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export const setPersistedCookie = (name: string, value: unknown): void => {
  const encoded = encodeURIComponent(JSON.stringify(value));
  document.cookie = `${name}=${encoded};path=/;max-age=${COOKIE_MAX_AGE_SECONDS};samesite=lax`;
};

export const getPersistedCookie = <T,>(name: string): T | null => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  if (!match) return null;

  try {
    return JSON.parse(decodeURIComponent(match[1])) as T;
  } catch {
    return null;
  }
};
