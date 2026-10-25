import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import { heroData } from "@/data/heroData";
import { getAllBlogPosts } from "@/lib/blog";

export default function Home() {
  const recentPosts = getAllBlogPosts().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection {...heroData} />

      {/* Value Proposition Highlights */}
      <section className="border-y border-[#e5e7d8] bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-[#eceee2] bg-[#fafaf7] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#687344] text-xl text-white">
                🛡️
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#222515]">
                Durable UPVC & Aluminium
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Weather-resistant profiles designed to endure monsoons, UV sun exposure, and coastal saline air without rust or rot.
              </p>
            </div>

            <div className="rounded-2xl border border-[#eceee2] bg-[#fafaf7] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#687344] text-xl text-white">
                🌱
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#222515]">
                Thermal & Acoustic Glazing
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Double-pane Low-E glass units reduce heat penetration and cut city traffic rumbles by up to 40 dB.
              </p>
            </div>

            <div className="rounded-2xl border border-[#eceee2] bg-[#fafaf7] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#687344] text-xl text-white">
                ✨
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#222515]">
                Custom Architectural Designs
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                From minimal sliding glass patio panels to oversized pivot entrance doors, customized to your floor plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#687344]">
                From Our Knowledge Hub
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#222515] sm:text-4xl">
                Latest Windows & Doors Guides
              </h2>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Discover expert advice on materials, insulation, and modern home trends.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d8dac7] bg-white px-5 py-2.5 text-xs font-semibold text-[#3e4428] shadow-sm transition-colors hover:bg-[#f3f4eb]"
            >
              Browse All Articles
              <span>→</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
