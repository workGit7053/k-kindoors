"use client";
import { useState, useMemo } from "react";
import { BlogPost, BlogCategory } from "@/types/blog";
import BlogCard from "@/components/BlogCard";

interface BlogListProps {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Category Pills & Search Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-[#687344] text-white shadow-sm"
                    : "border border-[#e5e7d8] bg-white text-[#454936] hover:bg-[#f3f4eb] hover:text-[#687344]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search windows, doors, guides..."
            className="w-full rounded-full border border-[#e5e7d8] bg-white px-4 py-2 pl-9 text-xs text-[#2f331f] placeholder:text-gray-400 focus:border-[#687344] focus:outline-none focus:ring-1 focus:ring-[#687344]"
          />
          <svg
            aria-hidden="true"
            className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-[#e5e7d8] pb-4 text-xs text-gray-500">
        <span>
          Showing{" "}
          <strong className="text-[#2f331f]">{filteredPosts.length}</strong>{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </span>
        {(selectedCategory !== "All" || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="font-medium text-[#687344] underline hover:text-[#49512d]"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Grid of Articles */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, idx) => (
            <BlogCard key={post.id} post={post} priority={idx < 3} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-dashed border-[#d8dac7] bg-white p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3f4eb] text-2xl text-[#687344]">
            🔍
          </div>
          <h3 className="mt-4 text-base font-semibold text-[#2f331f]">
            No articles found
          </h3>
          <p className="mt-2 text-xs text-gray-500">
            We couldn&apos;t find any articles matching your search criteria. Try
            adjusting your keywords or category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-6 rounded-full bg-[#687344] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#515b32]"
          >
            View All Articles
          </button>
        </div>
      )}
    </div>
  );
}
