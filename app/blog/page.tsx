import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts, getAllCategories, getFeaturedBlogPosts } from "@/lib/blog";
import FeaturedBlogHero from "@/components/FeaturedBlogHero";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Windows & Doors Knowledge Hub & Blog | KK Indoors",
  description:
    "Expert guides, architectural insights, and buying advice on UPVC windows, aluminium sliding doors, acoustic glass, and modern home trends.",
};

const WHATSAPP_LINK =
  "https://wa.me/YOUR_PHONE_NUMBER?text=Hi%20KK%20Indoors,%20I%20read%20your%20blog%20and%20would%20like%20a%20consultation%20on%20windows/doors.";

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();
  const featuredPosts = getFeaturedBlogPosts();
  const topFeatured = featuredPosts[0] || posts[0];

  return (
    <div className="min-h-screen bg-[#fafaf7] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-12 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[#687344]">
            KK Indoors Insights
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#222515] sm:text-5xl">
            Windows & Doors Architectural Blog
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Expert guides, material comparisons, and architectural tips to help
            you pick the perfect windows, sliding doors, and acoustic solutions
            for your dream home.
          </p>
        </header>

        {/* Featured Story Hero */}
        {topFeatured && (
          <div className="mb-16">
            <FeaturedBlogHero post={topFeatured} />
          </div>
        )}

        {/* Blog Post List & Category Filters */}
        <section aria-labelledby="all-articles-heading">
          <h2 id="all-articles-heading" className="sr-only">
            All Articles
          </h2>
          <BlogList posts={posts} categories={categories} />
        </section>

        {/* Consultation Callout */}
        <section className="mt-20 overflow-hidden rounded-3xl bg-[#353a26] p-8 text-white sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-block rounded-full bg-[#687344] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Personalized Advice
              </span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Planning a new build or window upgrade?
              </h2>
              <p className="mt-3 text-sm text-[#d4d9be] sm:text-base">
                Our architectural team can assess your blueprints, recommend the
                right UPVC or aluminium profile systems, and provide a complimentary
                estimate.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#7d8c4e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#687344]"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#869168] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
