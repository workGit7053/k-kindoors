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
                    ? "bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] text-white shadow-md shadow-[#0F8F7E]/20"
                    : "border border-[#E5E7EB] bg-white text-[#6B7280] hover:border-[#0F8F7E]/40 hover:bg-[#E3F4F1]/50 hover:text-[#0F8F7E]"
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
            className="w-full rounded-full border border-[#E5E7EB] bg-white px-4 py-2 pl-9 text-xs text-[#1E2328] placeholder:text-[#6B7280] focus:border-[#0F8F7E] focus:outline-none focus:ring-1 focus:ring-[#0F8F7E]"
          />
          <svg
            aria-hidden="true"
            className="absolute left-3 top-2.5 h-4 w-4 text-[#6B7280]"
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
              className="absolute right-3 top-2.5 text-xs text-[#6B7280] hover:text-[#1E2328]"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 text-xs text-[#6B7280]">
        <span>
          Showing{" "}
          <strong className="text-[#1E2328]">{filteredPosts.length}</strong>{" "}
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
            className="font-medium text-[#0F8F7E] underline hover:text-[#0D7A6B]"
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
        <div className="rounded-2xl border border-dashed border-[#D1D5DB] bg-white p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E3F4F1] to-[#C9EEE7] text-2xl text-[#0F8F7E]">
            🔍
          </div>
          <h3 className="mt-4 text-base font-semibold text-[#1E2328]">
            No articles found
          </h3>
          <p className="mt-2 text-xs text-[#6B7280]">
            We couldn&apos;t find any articles matching your search criteria. Try
            adjusting your keywords or category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-6 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-5 py-2 text-xs font-semibold text-white shadow-md shadow-[#0F8F7E]/20 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
          >
            View All Articles
          </button>
        </div>
      )}
    </div>
  );
}
