"use client";

import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SITE_URL || "https://kkindoors.com";

  const fullUrl = `${siteUrl}/blog/${slug}`;

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Check out this architectural guide on KK Indoors: "${title}" - ${fullUrl}`
  )}`;

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    fullUrl
  )}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${title}" by KK Indoors`
  )}&url=${encodeURIComponent(fullUrl)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
        Share Guide:
      </span>

      {/* WhatsApp Share */}
      <a
        href={whatsappShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-3 text-xs font-semibold text-[#0F8F7E] transition-all hover:border-[#0F8F7E] hover:bg-[#E3F4F1]"
      >
        <span>💬</span>
        <span>WhatsApp</span>
      </a>

      {/* LinkedIn Share */}
      <a
        href={linkedinShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-3 text-xs font-semibold text-[#1E2328] transition-all hover:border-[#0F8F7E] hover:bg-[#E3F4F1] hover:text-[#0F8F7E]"
      >
        <span>🔗</span>
        <span>LinkedIn</span>
      </a>

      {/* X / Twitter Share */}
      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-3 text-xs font-semibold text-[#1E2328] transition-all hover:border-[#0F8F7E] hover:bg-[#E3F4F1] hover:text-[#0F8F7E]"
      >
        <span>𝕏</span>
        <span>Post</span>
      </a>

      {/* Copy Link Button */}
      <button
        type="button"
        onClick={handleCopyLink}
        className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-3 text-xs font-semibold text-[#1E2328] transition-all hover:border-[#0F8F7E] hover:bg-[#E3F4F1] hover:text-[#0F8F7E]"
      >
        <span>📋</span>
        <span>{copied ? "Link Copied!" : "Copy Link"}</span>
      </button>
    </div>
  );
}
