import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import AuthorAvatar from "@/components/AuthorAvatar";

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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0F8F7E]/40 hover:shadow-xl hover:shadow-[#0F8F7E]/10">
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
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm shadow-[#0F8F7E]/20">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs text-[#6B7280]">
          <time dateTime={post.publishedAt}>{formattedDate}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-xl font-bold leading-snug text-[#1E2328] transition-colors group-hover:text-[#0F8F7E]">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#6B7280]">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-[#E3F4F1] px-2.5 py-1 text-xs font-medium text-[#0F8F7E] transition-colors hover:bg-[#D5EFEA]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[#E5E7EB] pt-4">
          <div className="flex items-center gap-3">
            <AuthorAvatar
              name={post.author.name}
              avatar={post.author.avatar}
              size="sm"
            />
            <div>
              <p className="text-xs font-semibold text-[#1E2328]">
                {post.author.name}
              </p>
              <p className="text-[11px] text-[#6B7280]">{post.author.role}</p>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold text-[#0F8F7E] transition-colors hover:text-[#0D7A6B]"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
