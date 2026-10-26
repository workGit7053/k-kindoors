import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";

interface AuthorAvatarProps {
  name: string;
  avatar?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeConfig = {
  sm: { container: "h-9 w-9 text-xs", px: 36, imgSize: 80 },
  md: { container: "h-11 w-11 text-sm", px: 44, imgSize: 100 },
  lg: { container: "h-12 w-12 text-sm", px: 48, imgSize: 120 },
  xl: { container: "h-16 w-16 text-base", px: 64, imgSize: 140 },
};

function getInitials(name: string): string {
  if (!name) return "KK";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * AuthorAvatar component
 *
 * Renders a crisp branded initials badge (e.g. "RS", "PN", "AP") in KK Indoors'
 * teal gradient when no custom photo is provided. This prevents random placeholder
 * people/stock photos from ever appearing on the UI.
 */
export default function AuthorAvatar({
  name,
  avatar,
  size = "md",
  className = "",
}: AuthorAvatarProps) {
  const config = sizeConfig[size];
  const initials = getInitials(name);

  // If no avatar image is provided, display the clean brand-initials badge
  if (!avatar || avatar.trim() === "") {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0F8F7E] to-[#0D7A6B] font-bold text-white shadow-sm shadow-[#0F8F7E]/25 select-none ${config.container} ${className}`}
        aria-label={name}
        title={name}
      >
        <span>{initials}</span>
      </div>
    );
  }

  const imageUrl = getCloudinaryUrl(avatar, {
    width: config.imgSize,
    height: config.imgSize,
    crop: "thumb",
  });

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#E3F4F1] to-[#C9EEE7] ${config.container} ${className}`}
    >
      <Image
        src={imageUrl}
        alt={name}
        fill
        sizes={`${config.px}px`}
        className="object-cover"
      />
    </div>
  );
}
