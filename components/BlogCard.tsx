import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { getCloudinaryUrl } from "@/lib/cloudinary";

interface BlogCardProps {
  post: BlogPost;
  priority?: boolean;
}

export default function BlogCard({ post, priority = false }: BlogCardProps) {
  const imageUrl = getCloudinaryUrl(post.coverImage, {
    width: 800,
    height: 500,
    crop: "fill",
    quality: "auto",
  });

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#e5e7d8] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Cover Image */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-gray-100"
      >
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full bg-[#687344] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <time dateTime={post.publishedAt}>{formattedDate}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-xl font-bold leading-snug text-[#2f331f] transition-colors group-hover:text-[#687344]">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-[#f3f4eb] px-2 py-0.5 text-xs text-[#525a33]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[#f0f2e8] pt-4">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full bg-gray-200">
              <Image
                src={getCloudinaryUrl(post.author.avatar, {
                  width: 80,
                  height: 80,
                  crop: "thumb",
                })}
                alt={post.author.name}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#2f331f]">
                {post.author.name}
              </p>
              <p className="text-[11px] text-gray-500">{post.author.role}</p>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold text-[#687344] transition-colors hover:text-[#49512d]"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
