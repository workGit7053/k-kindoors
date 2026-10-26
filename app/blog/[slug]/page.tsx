import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import BlogCard from "@/components/BlogCard";
import ShareButtons from "@/components/ShareButtons";
import AuthorAvatar from "@/components/AuthorAvatar";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | KK Indoors",
    };
  }

  const ogImageUrl = getCloudinaryUrl(post.coverImage, {
    width: 1200,
    height: 630,
    crop: "fill",
  });

  return {
    title: `${post.title} | KK Indoors`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

function BlogDetailSkeleton() {
  return (
    <div className="min-h-screen bg-[#F5F7F8] py-10 animate-pulse">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="h-4 w-44 rounded-full bg-gray-200 mb-6" />
        <div className="h-6 w-24 rounded-full bg-gray-200 mb-4" />
        <div className="h-10 w-3/4 rounded-xl bg-gray-200 mb-4" />
        <div className="h-5 w-1/2 rounded-lg bg-gray-200 mb-8" />
        <div className="aspect-[16/9] w-full rounded-3xl bg-gray-200 mb-12 shadow-sm" />
        <div className="space-y-4">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

async function BlogPostContent({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const heroImageUrl = getCloudinaryUrl(post.coverImage, {
    width: 1400,
    height: 750,
    crop: "fill",
    quality: "auto",
  });

  const whatsappInquiryUrl = `https://wa.me/9318335415?text=${encodeURIComponent(
    `Hi KK Indoors, I read your article "${post.title}" and would like to inquire about similar windows or doors for my project.`
  )}`;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kkindoors.com";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  // Schema.org Article Structured Data (JSON-LD) for Google Rich Snippets
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [heroImageUrl],
    datePublished: `${post.publishedAt}T09:00:00+05:30`,
    dateModified: `${post.publishedAt}T09:00:00+05:30`,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "KK Indoors",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="min-h-screen bg-[#F5F7F8] py-10">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-[#6B7280]">
            <li>
              <Link href="/" className="hover:text-[#0F8F7E]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-[#0F8F7E]">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#0F8F7E]">{post.category}</li>
          </ol>
        </nav>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm shadow-[#0F8F7E]/20">
              {post.category}
            </span>
            <span className="text-xs text-[#6B7280]">
              {post.readingTime}
            </span>
            <span className="text-xs text-gray-400">•</span>
            <time
              dateTime={post.publishedAt}
              className="text-xs text-[#6B7280]"
            >
              {formattedDate}
            </time>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#1E2328] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="mt-3 text-lg font-medium text-[#6B7280] sm:text-xl">
              {post.subtitle}
            </p>
          )}

          {/* Author info & Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#E5E7EB] py-4">
            <div className="flex items-center gap-3">
              <AuthorAvatar
                name={post.author.name}
                avatar={post.author.avatar}
                size="lg"
              />
              <div>
                <p className="text-sm font-bold text-[#1E2328]">
                  {post.author.name}
                </p>
                <p className="text-xs text-[#6B7280]">{post.author.role}</p>
              </div>
            </div>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#0F8F7E]/20 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
            >
              <span>💬</span>
              <span>Ask an Expert on WhatsApp</span>
            </a>
          </div>
        </header>

        {/* Cloudinary Cover Image */}
        <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-xl ring-1 ring-[#0F8F7E]/10">
          <Image
            src={heroImageUrl}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="space-y-10 text-[#374151]">
          {post.sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#1E2328] sm:text-3xl">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base leading-relaxed text-[#374151] sm:text-lg">
                  {p}
                </p>
              ))}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="my-4 space-y-2.5 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  {section.bulletPoints.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-[#374151] sm:text-base">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F4F1] text-xs font-bold text-[#0F8F7E]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.callout && (
                <aside
                  className={`rounded-2xl p-6 border ${
                    section.callout.type === "important"
                      ? "border-amber-200 bg-amber-50 text-amber-900"
                      : "border-[#A7E0D6] bg-gradient-to-r from-[#E3F4F1] to-[#F0FAF8] text-[#0D6256]"
                  }`}
                >
                  {section.callout.title && (
                    <h3 className="mb-2 text-sm font-bold uppercase tracking-wider">
                      {section.callout.title}
                    </h3>
                  )}
                  <p className="text-sm leading-relaxed sm:text-base">
                    {section.callout.text}
                  </p>
                </aside>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 border-t border-[#E5E7EB] pt-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
            Article Topics:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#0F8F7E] transition-colors hover:bg-[#E3F4F1]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
            <AuthorAvatar
              name={post.author.name}
              avatar={post.author.avatar}
              size="xl"
            />
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0F8F7E]">
                About the Author
              </p>
              <h3 className="text-lg font-bold text-[#1E2328]">
                {post.author.name}
              </h3>
              <p className="text-xs font-medium text-[#6B7280]">
                {post.author.role} at KK Indoors
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280] sm:text-sm">
                Specializing in fenestration architecture, high-performance acoustic glass systems, and thermally-broken aluminium door installations.
              </p>
            </div>
          </div>
        </div>

        {/* Social Share Section */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
          <ShareButtons title={post.title} slug={post.slug} />
        </div>

        {/* CTA Box */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#2D3339] bg-gradient-to-br from-[#1E2328] via-[#242A30] to-[#0F8F7E]/30 p-8 text-center text-white shadow-2xl sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Want to Discuss Windows & Doors for Your Project?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#D1D5DB] sm:text-base">
            Send us your window schedules or architectural plans on WhatsApp. Our engineers will recommend the best UPVC or aluminium systems and provide free estimates.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0F8F7E]/30 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
            >
              <span>Get WhatsApp Quotation</span>
              <span>→</span>
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse More Articles
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t border-[#E5E7EB] pt-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0F8F7E]">
                  More in {post.category}
                </p>
                <h2 className="text-2xl font-bold text-[#1E2328]">
                  Related Articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs font-semibold text-[#0F8F7E] hover:underline"
              >
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}

export default function BlogPostPage(props: Props) {
  return (
    <Suspense fallback={<BlogDetailSkeleton />}>
      <BlogPostContent params={props.params} />
    </Suspense>
  );
}

