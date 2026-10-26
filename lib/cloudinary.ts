export interface CloudinaryOptions {
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "scale" | "thumb" | "crop";
  quality?: "auto" | number;
  format?: "auto" | "webp" | "jpg" | "png";
}

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function getCloudinaryUrl(
  src: string,
  options: CloudinaryOptions = {}
): string {
  if (!src) return "";

  // Keep external image URLs unchanged.
  if (/^https?:\/\//i.test(src)) {
    // Return Unsplash and other external URLs as they are.
    if (!src.includes("res.cloudinary.com")) {
      return src;
    }

    // Transform existing Cloudinary URLs.
    const { width, height, crop = "fill", quality = "auto", format = "auto" } = options;

    const transformations = [
      format && `f_${format}`,
      quality && `q_${quality}`,
      (width || height) && crop && `c_${crop}`,
      width && `w_${width}`,
      height && `h_${height}`,
    ].filter(Boolean);

    if (!transformations.length) return src;

    return src.replace(
      "/image/upload/",
      `/image/upload/${transformations.join(",")}/`
    );
  }

  // A public ID requires a configured Cloudinary cloud name.
  if (!CLOUD_NAME) {
    return src;
  }

  const { width, height, crop = "fill", quality = "auto", format = "auto" } = options;

  const transformations = [
    format && `f_${format}`,
    quality && `q_${quality}`,
    (width || height) && crop && `c_${crop}`,
    width && `w_${width}`,
    height && `h_${height}`,
  ].filter(Boolean);

  const transformPath = transformations.length
    ? `${transformations.join(",")}/`
    : "";

  const cleanPublicId = src.replace(/^\/+/, "");

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformPath}${cleanPublicId}`;
}