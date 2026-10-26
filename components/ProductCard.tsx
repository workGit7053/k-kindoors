import Link from "next/link";
import Image from "next/image";
import { ProductItem } from "@/types/product";
import { getCloudinaryUrl } from "@/lib/cloudinary";

interface ProductCardProps {
  product: ProductItem;
  priority?: boolean;
}

const WHATSAPP_PHONE = "9318335415";

export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  const imageUrl = getCloudinaryUrl(product.image, {
    width: 800,
    height: 550,
    crop: "fill",
    quality: "auto",
  });

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hello KK Indoors, I am interested in getting a quote and specifications for "${product.title}" (${product.tagline}). Please provide estimated pricing.`
  )}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition-shadow duration-300 hover:border-[#0F8F7E]/40 hover:shadow-xl hover:shadow-[#0F8F7E]/10">
      {/* Product Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={product.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 transform-gpu"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0F8F7E] shadow-sm backdrop-blur-sm">
            {product.subCategory}
          </span>
          <span className="rounded-full bg-[#1E2328]/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div>
          <h3 className="text-xl font-bold leading-snug text-[#1E2328] transition-colors group-hover:text-[#0F8F7E]">
            {product.title}
          </h3>
          <p className="mt-1 text-xs font-semibold text-[#0F8F7E]">
            {product.tagline}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
            {product.description}
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="mt-6 border-t border-[#E5E7EB] pt-5">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1E2328]">
            Key Engineering Highlights:
          </p>
          <ul className="mt-3 space-y-2">
            {product.keyFeatures.slice(0, 3).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs text-[#374151]"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E3F4F1] text-[10px] font-bold text-[#0F8F7E]">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Specs Pill Grid */}
        <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl bg-[#F5F7F8] p-3 text-xs">
          {product.specs.glassOptions && (
            <div>
              <span className="block text-[10px] font-bold uppercase text-[#6B7280]">
                Glazing:
              </span>
              <span className="font-semibold text-[#1E2328] truncate block">
                {product.specs.glassOptions}
              </span>
            </div>
          )}
          {product.specs.soundInsulation && (
            <div>
              <span className="block text-[10px] font-bold uppercase text-[#6B7280]">
                Acoustics:
              </span>
              <span className="font-semibold text-[#1E2328] truncate block">
                {product.specs.soundInsulation}
              </span>
            </div>
          )}
          {product.specs.profileDepth && (
            <div>
              <span className="block text-[10px] font-bold uppercase text-[#6B7280]">
                Depth:
              </span>
              <span className="font-semibold text-[#1E2328] truncate block">
                {product.specs.profileDepth}
              </span>
            </div>
          )}
          {product.specs.warranty && (
            <div>
              <span className="block text-[10px] font-bold uppercase text-[#6B7280]">
                Warranty:
              </span>
              <span className="font-semibold text-[#0F8F7E] truncate block">
                {product.specs.warranty}
              </span>
            </div>
          )}
        </div>

        {/* Best For Note */}
        <p className="mt-4 text-[11px] text-[#6B7280]">
          <strong className="text-[#1E2328]">Ideal for:</strong> {product.bestFor}
        </p>

        {/* Actions Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E7EB] pt-5">
          {product.guideSlug ? (
            <Link
              href={`/blog/${product.guideSlug}`}
              className="text-xs font-semibold text-[#0F8F7E] hover:underline"
            >
              Read Buying Guide →
            </Link>
          ) : (
            <span className="text-xs text-[#6B7280]">Custom Fabrication</span>
          )}

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#0F8F7E]/20 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
          >
            <span>💬</span>
            <span>Get Quote</span>
          </a>
        </div>
      </div>
    </div>
  );
}
