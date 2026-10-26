import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Premium Windows & Doors | KK Indoors",
  description:
    "Explore our complete range of architectural aluminium and UPVC windows, sliding patio systems, and custom glass doors.",
};

const WHATSAPP_LINK = "https://wa.me/9318335415";

const productCategories = [
  {
    title: "Aluminium Windows",
    description:
      "Ultra-slim sightlines, high structural rigidity, and thermally broken insulation for modern architectural facades.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=500&q=80",
    features: ["Slim Sightlines", "Thermal Break", "Multi-Point Lock", "RAL Powder Coating"],
    guideLink: "/blog/upvc-vs-aluminium-windows-comparison",
  },
  {
    title: "UPVC Windows",
    description:
      "Multi-chambered profiles delivering industry-leading thermal insulation, weather sealing, and acoustic noise reduction.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&h=500&q=80",
    features: ["Zero Maintenance", "Acoustic Insulation", "Corrosion Resistant", "UV-Stabilized"],
    guideLink: "/blog/soundproof-windows-city-living",
  },
  {
    title: "Sliding Patio & Balcony Doors",
    description:
      "Expansive glass panels with smooth whisper-quiet stainless steel rollers connecting living rooms to balconies.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=500&q=80",
    features: ["2 & 3-Track Systems", "Integrated Mesh", "Tempered Safety Glass", "Flush Threshold"],
    guideLink: "/blog/modern-sliding-glass-doors-guide",
  },
  {
    title: "Pivot & Entrance Doors",
    description:
      "Architectural front doors that command attention with oversized dimensions, biometric locks, and striking finishes.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&h=500&q=80",
    features: ["Heavy Duty Pivot", "Smart Lock Ready", "Sound Dampening", "Custom Finishes"],
    guideLink: "/blog/top-front-door-styles-curb-appeal",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7F8] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-[#A7E0D6]/60 bg-[#E3F4F1] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0F8F7E]">
            Our Architectural Systems
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1E2328] sm:text-5xl">
            Engineered Windows & Doors Collection
          </h1>
          <p className="mt-4 text-base text-[#6B7280] sm:text-lg">
            Discover our precision-crafted fenestration solutions. Every system is tailor-made to your exact architectural specifications.
          </p>
        </div>

        {/* Category Quick Selector */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Link
            href="/products/windows"
            className="group relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0F8F7E]/40 hover:shadow-xl hover:shadow-[#0F8F7E]/10"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#E3F4F1] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0F8F7E]">
                Explore Department
              </span>
              <span className="text-sm font-semibold text-[#0F8F7E] group-hover:translate-x-1 transition-transform">
                View All Windows →
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#1E2328] group-hover:text-[#0F8F7E] transition-colors">
              Windows Systems
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
              Slimline aluminium sliders, UPVC multi-chamber casements, tilt & turn systems, and acoustic glazing.
            </p>
          </Link>

          <Link
            href="/products/doors"
            className="group relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0F8F7E]/40 hover:shadow-xl hover:shadow-[#0F8F7E]/10"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#E3F4F1] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0F8F7E]">
                Explore Department
              </span>
              <span className="text-sm font-semibold text-[#0F8F7E] group-hover:translate-x-1 transition-transform">
                View All Doors →
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#1E2328] group-hover:text-[#0F8F7E] transition-colors">
              Doors Systems
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
              Monumental pivot entrance doors, heavy-duty sliding patio panels, bi-folds, and frameless glass partitions.
            </p>
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {productCategories.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0F8F7E]/40 hover:shadow-xl hover:shadow-[#0F8F7E]/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#1E2328] transition-colors group-hover:text-[#0F8F7E]">
                  {product.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                  {product.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-[#E3F4F1] px-3 py-1 text-xs font-medium text-[#0F8F7E]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E7EB] pt-6">
                  <Link
                    href={product.guideLink}
                    className="text-xs font-semibold text-[#0F8F7E] transition-colors hover:text-[#0D7A6B]"
                  >
                    Read Engineering Guide →
                  </Link>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#0F8F7E]/20 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Quote Box */}
        <div className="mt-16 rounded-3xl border border-[#2D3339] bg-gradient-to-br from-[#1E2328] via-[#242A30] to-[#0F8F7E]/30 p-8 text-center text-white shadow-2xl sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Need Custom Dimensions or Bulk Project Pricing?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#D1D5DB] sm:text-base">
            Share your elevations or schedules with our engineering team for free CAD estimation and profile selection assistance.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0F8F7E]/30 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
          >
            Chat with a Specialist on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
