import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDoorsProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: Promise<{ category: string }>;
}

export const dynamic = "force-static";

const VALID_CATEGORIES = ["aluminium", "upvc", "sliding", "glass"];

const categoryMeta: Record<
  string,
  { title: string; heading: string; description: string; guideSlug: string }
> = {
  aluminium: {
    title: "Aluminium Doors | High-Load Sliders & Bi-Fold Systems",
    heading: "Architectural Aluminium Doors",
    description:
      "Structural aluminium profile door systems designed for expansive openings, slim modern border frames, and whisper-quiet operation.",
    guideSlug: "modern-sliding-glass-doors-guide",
  },
  upvc: {
    title: "UPVC Doors | Balcony Sliders & Casement French Doors",
    heading: "Weather-Sealed UPVC Doors",
    description:
      "Engineered with internal galvanized steel cores, multi-chambered insulation, and dual EPDM gaskets for total monsoon and noise defense.",
    guideSlug: "maintenance-guide-doors-windows",
  },
  sliding: {
    title: "Sliding Doors | Heavy-Duty Patio & Balcony Systems",
    heading: "Smooth-Glide Sliding Patio Doors",
    description:
      "Grand panoramic sliding systems engineered with 2-track and 3-track options, flush thresholds, and stainless steel Grade 304 tandem rollers.",
    guideSlug: "modern-sliding-glass-doors-guide",
  },
  glass: {
    title: "Glass Doors | Frameless Toughened Safety Partitions",
    heading: "Frameless Toughened Glass Doors",
    description:
      "12mm Grade-A toughened glass doors and room dividers equipped with minimalist architectural patch fittings and hydraulic floor pivots.",
    guideSlug: "top-front-door-styles-curb-appeal",
  },
};

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((cat) => ({
    category: cat,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category.toLowerCase()];

  if (!meta) {
    return {
      title: "Doors Collection | KK Indoors",
    };
  }

  return {
    title: `${meta.title} | KK Indoors`,
    description: meta.description,
  };
}

function DoorCategorySkeleton() {
  return (
    <div className="min-h-screen bg-[#F5F7F8] py-14 lg:py-20 animate-pulse">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-4 w-40 rounded bg-gray-200 mb-6" />
        <div className="h-6 w-32 rounded-full bg-gray-200 mb-4" />
        <div className="h-10 w-2/3 rounded-xl bg-gray-200 mb-4" />
        <div className="h-5 w-1/2 rounded-lg bg-gray-200 mb-8" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="aspect-[16/10] rounded-3xl bg-gray-200" />
          <div className="aspect-[16/10] rounded-3xl bg-gray-200" />
          <div className="aspect-[16/10] rounded-3xl bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

async function DoorCategoryContent({ params }: Props) {
  const { category } = await params;
  const normalizedCategory = category.toLowerCase();

  if (!VALID_CATEGORIES.includes(normalizedCategory)) {
    notFound();
  }

  const meta = categoryMeta[normalizedCategory];
  const products = getDoorsProducts(normalizedCategory);

  const filterTabs = [
    { name: "All Doors", href: "/products/doors", active: false },
    {
      name: "Aluminium Doors",
      href: "/products/doors/aluminium",
      active: normalizedCategory === "aluminium",
    },
    {
      name: "UPVC Doors",
      href: "/products/doors/upvc",
      active: normalizedCategory === "upvc",
    },
    {
      name: "Sliding Doors",
      href: "/products/doors/sliding",
      active: normalizedCategory === "sliding",
    },
    {
      name: "Glass Doors",
      href: "/products/doors/glass",
      active: normalizedCategory === "glass",
    },
  ];

  const whatsappInquiryUrl = `https://wa.me/9318335415?text=${encodeURIComponent(
    `Hello KK Indoors, I would like to inquire about ${meta.heading} for my architectural project.`
  )}`;

  return (
    <div className="min-h-screen bg-[#F5F7F8] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#6B7280]">
            <li>
              <Link href="/" className="hover:text-[#0F8F7E]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products/doors" className="hover:text-[#0F8F7E]">
                Doors
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-[#0F8F7E] capitalize">
              {normalizedCategory}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl">
          <span className="inline-block rounded-full border border-[#A7E0D6]/60 bg-[#E3F4F1] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0F8F7E]">
            {normalizedCategory} Systems
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1E2328] sm:text-5xl lg:text-6xl">
            {meta.heading}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            {meta.description}
          </p>
        </header>

        {/* Filter Navigation Tabs */}
        <nav aria-label="Sub categories" className="mt-10 flex flex-wrap gap-2 border-b border-[#E5E7EB] pb-5">
          {filterTabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                tab.active
                  ? "bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] text-white shadow-md shadow-[#0F8F7E]/20"
                  : "border border-[#E5E7EB] bg-white text-[#6B7280] hover:border-[#0F8F7E]/40 hover:bg-[#E3F4F1]/50 hover:text-[#0F8F7E]"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>

        {/* Products Grid */}
        <section aria-labelledby="category-doors" className="mt-12">
          <h2 id="category-doors" className="sr-only">
            {meta.heading} Products
          </h2>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, idx) => (
                <ProductCard key={product.id} product={product} priority={idx < 2} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#D1D5DB] bg-white p-12 text-center">
              <p className="text-sm text-[#6B7280]">
                Custom {normalizedCategory} doors available on demand.
              </p>
            </div>
          )}
        </section>

        {/* Action Banner */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-[#2D3339] bg-gradient-to-br from-[#1E2328] via-[#242A30] to-[#0F8F7E]/30 p-8 text-white shadow-2xl sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-block rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#14A693] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#0F8F7E]/30">
                Direct Consultation
              </span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Require Custom Dimensions or Track Configuration?
              </h2>
              <p className="mt-3 text-sm text-[#D1D5DB] sm:text-base">
                Our technicians provide complimentary on-site measurements and CAD drawings for your project.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0F8F7E]/30 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/products/doors"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View All Doors
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function DoorCategoryPage(props: Props) {
  return (
    <Suspense fallback={<DoorCategorySkeleton />}>
      <DoorCategoryContent params={props.params} />
    </Suspense>
  );
}

