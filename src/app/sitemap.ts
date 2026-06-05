import type { MetadataRoute } from "next";
import { getCaseSlugs } from "@/lib/content/cases";
import { locales } from "@/lib/i18n";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths: { path: string; priority: number; freq: "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, freq: "monthly" },
    { path: "/work", priority: 0.9, freq: "monthly" },
    { path: "/services", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "yearly" },
    { path: "/contact", priority: 0.7, freq: "yearly" },
  ];

  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((lang) =>
    staticPaths.map(({ path, priority, freq }) => ({
      url: `${SITE_URL}/${lang}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: freq,
      priority,
    })),
  );

  const caseRoutes: MetadataRoute.Sitemap = locales.flatMap((lang) =>
    getCaseSlugs().map((slug) => ({
      url: `${SITE_URL}/${lang}/work/${slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...caseRoutes];
}
