export interface CloudinaryOptions {
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "scale" | "thumb" | "crop";
  quality?: "auto" | number;
  format?: "auto" | "webp" | "jpg" | "png";
}

const DEFAULT_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo";

/**
 * Builds or transforms a Cloudinary image URL.
 * Supports:
 * 1. Full Cloudinary URLs (injects format/quality/dimensions)
 * 2. Public IDs (e.g., 'samples/architecture/modern-window')
 * 3. External fallback URLs (returns directly if not Cloudinary)
 */
export function getCloudinaryUrl(
  src: string,
  options: CloudinaryOptions = {}
): string {
  if (!src) return "";

  const {
    width,
    height,
    crop = "fill",
    quality = "auto",
    format = "auto",
  } = options;

  const transforms: string[] = [];

  if (format) transforms.push(`f_${format}`);
  if (quality) transforms.push(`q_${quality}`);
  if (crop && (width || height)) transforms.push(`c_${crop}`);
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);

  const transformString = transforms.join(",");

  // Check if it's already a full URL
  if (src.startsWith("http://") || src.startsWith("https://")) {
    if (src.includes("res.cloudinary.com") && transformString) {
      // Inject transformation parameters into Cloudinary URL: /image/upload/...
      return src.replace("/image/upload/", `/image/upload/${transformString}/`);
    }
    return src;
  }

  // Treat as Cloudinary public ID
  const cleanPublicId = src.replace(/^\/+/, "");
  const transformPath = transformString ? `${transformString}/` : "";
  return `https://res.cloudinary.com/${DEFAULT_CLOUD_NAME}/image/upload/${transformPath}${cleanPublicId}`;
}
