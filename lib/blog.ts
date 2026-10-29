import { windowMagicBlogPosts } from "@/data/blogs";
import { BlogPost, BlogCategory } from "@/types/blog";

// Keep the existing dataset intact while removing the broken legacy import.
const ALL_POSTS: BlogPost[] = [...windowMagicBlogPosts];

export function getAllBlogPosts(): BlogPost[] {
  return [...ALL_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.featured);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((post) => post.slug === slug);
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
    "Technical Systems",
    "Design & Trends",
    "Insect Screens",
    "Conservatories",
    "Features & Benefits",
    "Installation Guide",
    "Energy & Insulation",
    "Maintenance & Care",
    "About Us",
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