export const locales = ["az", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "az";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localizedPath(lang: Locale, path: string): string {
  if (path === "/" || path === "") return `/${lang}`;
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${trimmed}`;
}

export function stripLocaleFromPath(path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  if (isLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return path;
}
