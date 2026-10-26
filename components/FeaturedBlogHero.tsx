import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { getCloudinaryUrl } from "@/lib/cloudinary";

interface FeaturedBlogHeroProps {
  post: BlogPost;
}

export default function FeaturedBlogHero({ post }: FeaturedBlogHeroProps) {
  const imageUrl = getCloudinaryUrl(post.coverImage, {
    width: 1200,
    height: 700,
    crop: "fill",
    quality: "auto",
  });

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:border-[#0F8F7E]/40 hover:shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Visual Cover */}
        <div className="relative aspect-[16/10] w-full lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute left-6 top-6">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#0F8F7E]/25">
              Featured Story
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-5">
          <div>
            <div className="flex items-center gap-3 text-xs font-medium text-[#6B7280]">
              <span className="font-semibold text-[#0F8F7E]">
                {post.category}
              </span>
              <span>•</span>
              <time dateTime={post.publishedAt}>{formattedDate}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#1E2328] sm:text-3xl">
              <Link
                href={`/blog/${post.slug}`}
                className="transition-colors hover:text-[#0F8F7E]"
              >
                {post.title}
              </Link>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#6B7280] sm:text-base">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-[#E5E7EB] pt-6">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={getCloudinaryUrl(post.author.avatar, {
                    width: 100,
                    height: 100,
                    crop: "thumb",
                  })}
                  alt={post.author.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1E2328]">
                  {post.author.name}
                </p>
                <p className="text-xs text-[#6B7280]">{post.author.role}</p>
              </div>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#0F8F7E]/20 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
            >
              Read Article
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
