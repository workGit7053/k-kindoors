import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kkindoors.com";
const BUILD_DATE = new Date("2026-10-26T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts();

  // Static marketing & product routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/windows`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/windows/aluminium`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/windows/upvc`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/windows/sliding`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/doors`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/doors/aluminium`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/doors/upvc`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/doors/sliding`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/doors/glass`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: BUILD_DATE,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic blog post routes
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
