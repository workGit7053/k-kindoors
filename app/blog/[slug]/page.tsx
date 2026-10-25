import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import BlogCard from "@/components/BlogCard";

type Props = {
  params: Promise<{ slug: string }>;
};

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

export default async function BlogPostPage({ params }: Props) {
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

  const whatsappInquiryUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(
    `Hi KK Indoors, I read your article "${post.title}" and would like to inquire about similar windows or doors for my project.`
  )}`;

  return (
    <div className="min-h-screen bg-[#fafaf7] py-10">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#687344]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-[#687344]">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#687344]">{post.category}</li>
          </ol>
        </nav>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#687344] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">
              {post.readingTime}
            </span>
            <span className="text-xs text-gray-400">•</span>
            <time
              dateTime={post.publishedAt}
              className="text-xs text-gray-500"
            >
              {formattedDate}
            </time>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#222515] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="mt-3 text-lg font-medium text-gray-600 sm:text-xl">
              {post.subtitle}
            </p>
          )}

          {/* Author info & Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#e5e7d8] py-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={getCloudinaryUrl(post.author.avatar, {
                    width: 100,
                    height: 100,
                    crop: "thumb",
                  })}
                  alt={post.author.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[#222515]">
                  {post.author.name}
                </p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#687344] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#525b33]"
            >
              <span>💬</span>
              <span>Ask an Expert on WhatsApp</span>
            </a>
          </div>
        </header>

        {/* Cloudinary Cover Image */}
        <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-[#e5e7d8] bg-gray-100 shadow-md">
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
        <div className="space-y-10 text-[#303322]">
          {post.sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-[#222515] sm:text-3xl">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  {p}
                </p>
              ))}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="my-4 space-y-2.5 rounded-2xl bg-white p-6 shadow-sm border border-[#e5e7d8]">
                  {section.bulletPoints.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-700 sm:text-base">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef1e2] text-xs font-bold text-[#687344]">
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
                      : "border-[#dce1cb] bg-[#f5f7ed] text-[#3e4428]"
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
        <div className="mt-12 border-t border-[#e5e7d8] pt-6">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Article Topics:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-white border border-[#e5e7d8] px-3 py-1.5 text-xs font-medium text-[#4b5230]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 rounded-2xl border border-[#e5e7d8] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-200">
              <Image
                src={getCloudinaryUrl(post.author.avatar, {
                  width: 140,
                  height: 140,
                  crop: "thumb",
                })}
                alt={post.author.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#687344]">
                About the Author
              </p>
              <h3 className="text-lg font-bold text-[#222515]">
                {post.author.name}
              </h3>
              <p className="text-xs font-medium text-gray-500">
                {post.author.role} at KK Indoors
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                Specializing in fenestration architecture, high-performance acoustic glass systems, and thermally-broken aluminium door installations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-[#353a26] p-8 text-center text-white sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Want to Discuss Windows & Doors for Your Project?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#d4d9be] sm:text-base">
            Send us your window schedules or architectural plans on WhatsApp. Our engineers will recommend the best UPVC or aluminium systems and provide free estimates.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#7d8c4e] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#687344]"
            >
              <span>Get WhatsApp Quotation</span>
              <span>→</span>
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border border-[#869168] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse More Articles
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 border-t border-[#e5e7d8] pt-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#687344]">
                  More in {post.category}
                </p>
                <h2 className="text-2xl font-bold text-[#222515]">
                  Related Articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs font-semibold text-[#687344] hover:underline"
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
