import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getWindowsProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: Promise<{ category: string }>;
}

export const dynamic = "force-static";

const VALID_CATEGORIES = ["aluminium", "upvc", "sliding"];

const categoryMeta: Record<
  string,
  { title: string; heading: string; description: string; guideSlug: string }
> = {
  aluminium: {
    title: "Aluminium Windows | Slimline & Thermal Break Systems",
    heading: "Architectural Aluminium Windows",
    description:
      "Crafted with structural aerospace-grade 6063-T6 alloy for ultra-slim frames, grand panoramic views, and unmatched modern architectural elegance.",
    guideSlug: "upvc-vs-aluminium-windows-comparison",
  },
  upvc: {
    title: "UPVC Windows | Multi-Chamber Energy & Acoustic Systems",
    heading: "High-Performance UPVC Windows",
    description:
      "Engineered with 5-chamber internal insulation profiles and galvanized steel reinforcements to block monsoon rain, tropical heat, and city noise completely.",
    guideSlug: "soundproof-windows-city-living",
  },
  sliding: {
    title: "Sliding Windows | Whisper-Quiet Horizon Gliders",
    heading: "Smooth-Glide Sliding Windows",
    description:
      "Space-saving horizontal sliding systems featuring low-friction Grade 304 stainless steel tandem rollers and optional integrated mosquito mesh channels.",
    guideSlug: "maintenance-guide-doors-windows",
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
      title: "Windows Collection | KK Indoors",
    };
  }

  return {
    title: `${meta.title} | KK Indoors`,
    description: meta.description,
  };
}

function WindowCategorySkeleton() {
  return (
    <div className="min-h-screen bg-[#F5F7F8] py-14 lg:py-20 animate-pulse">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-4 w-40 rounded bg-gray-200 mb-6" />
        <div className="h-6 w-32 rounded-full bg-gray-200 mb-4" />
        <div className="h-10 w-2/3 rounded-xl bg-gray-200 mb-4" />
        <div className="h-5 w-1/2 rounded-lg bg-gray-200 mb-8" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="aspect-[16/10] rounded-3xl bg-gray-200" />
          <div className="aspect-[16/10] rounded-3xl bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

async function WindowCategoryContent({ params }: Props) {
  const { category } = await params;
  const normalizedCategory = category.toLowerCase();

  if (!VALID_CATEGORIES.includes(normalizedCategory)) {
    notFound();
  }

  const meta = categoryMeta[normalizedCategory];
  const products = getWindowsProducts(normalizedCategory);

  const filterTabs = [
    { name: "All Windows", href: "/products/windows", active: false },
    {
      name: "Aluminium Windows",
      href: "/products/windows/aluminium",
      active: normalizedCategory === "aluminium",
    },
    {
      name: "UPVC Windows",
      href: "/products/windows/upvc",
      active: normalizedCategory === "upvc",
    },
    {
      name: "Sliding Windows",
      href: "/products/windows/sliding",
      active: normalizedCategory === "sliding",
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
              <Link href="/products/windows" className="hover:text-[#0F8F7E]">
                Windows
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
        <section aria-labelledby="category-products" className="mt-12">
          <h2 id="category-products" className="sr-only">
            {meta.heading} Products
          </h2>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {products.map((product, idx) => (
                <ProductCard key={product.id} product={product} priority={idx === 0} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#D1D5DB] bg-white p-12 text-center">
              <p className="text-sm text-[#6B7280]">
                Custom {normalizedCategory} systems available on demand.
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
                Require Custom Dimensions or On-Site Survey?
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
                href="/products/windows"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View All Windows
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function WindowCategoryPage(props: Props) {
  return (
    <Suspense fallback={<WindowCategorySkeleton />}>
      <WindowCategoryContent params={props.params} />
    </Suspense>
  );
}

