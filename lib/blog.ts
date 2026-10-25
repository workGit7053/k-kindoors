import { dummyBlogPosts } from "@/data/blogs";
import { BlogPost, BlogCategory } from "@/types/blog";

export function getAllBlogPosts(): BlogPost[] {
  return [...dummyBlogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.featured);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return dummyBlogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (!category || category === "All") {
    return getAllBlogPosts();
  }
  return getAllBlogPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): BlogCategory[] {
  return [
    "All",
    "Windows",
    "Doors",
    "Energy & Insulation",
    "Design & Trends",
    "Maintenance & Care",
  ];
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): BlogPost[] {
  return getAllBlogPosts()
    .filter(
      (post) => post.slug !== currentSlug && post.category === category
    )
    .slice(0, limit);
}
