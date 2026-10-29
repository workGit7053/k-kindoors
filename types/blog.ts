export type BlogCategory =
  | "All"
  | "Windows"
  | "Doors"
  | "Energy & Insulation"
  | "Design & Trends"
  | "Maintenance & Care"
  // Added for the Window Magic catalogue posts
  | "About Us"
  | "Features & Benefits"
  | "Insect Screens"
  | "Conservatories"
  | "Technical Systems"
  | "Installation Guide";

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogContentSection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
  callout?: {
    type: "tip" | "important" | "quote";
    title?: string;
    text: string;
  };
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  coverImage: string;
  author: Author;
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
  tags: string[];
  sections: BlogContentSection[];
}