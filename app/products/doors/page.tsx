import Link from "next/link";
import type { Metadata } from "next";
import { getDoorsProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Architectural Doors | Sliding, Pivot & Folding Systems | KK Indoors",
  description:
    "Discover heavy-duty aluminium sliding patio doors, monumental pivot entrances, UPVC balcony sliders, and frameless toughened glass partitions.",
};

const WHATSAPP_LINK =
  "https://wa.me/9318335415?text=Hello%20KK%20Indoors,%20I%20am%20interested%20in%20doors%20for%20my%20project.%20Please%20share%20quotation%20and%20catalogs.";

const filterTabs = [
  { name: "All Doors", href: "/products/doors", active: true },
  { name: "Aluminium Doors", href: "/products/doors/aluminium", active: false },
  { name: "UPVC Doors", href: "/products/doors/upvc", active: false },
  { name: "Sliding Doors", href: "/products/doors/sliding", active: false },
  { name: "Glass Doors", href: "/products/doors/glass", active: false },
];

export default function DoorsPage() {
  const doors = getDoorsProducts("all");

  return (
    <div className="min-h-screen bg-[#F5F7F8] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO HEADER                                                    */}
        {/* ========================================================================= */}
        <header className="max-w-3xl">
          <span className="inline-block rounded-full border border-[#A7E0D6]/60 bg-[#E3F4F1] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0F8F7E]">
            KK Indoors Fenestration
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1E2328] sm:text-5xl lg:text-6xl">
            Architectural Doors Collection
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Blurring the boundaries between inside and outside. Explore monumental pivot entry doors, heavy-duty panoramic patio sliders, concertina bi-folds, and minimalist frameless glass partitions.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* SECTION 2: CATEGORY FILTER TABS                                           */}
        {/* ========================================================================= */}
        <nav aria-label="Door sub-categories" className="mt-10 flex flex-wrap gap-2 border-b border-[#E5E7EB] pb-5">
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

        {/* ========================================================================= */}
        {/* SECTION 3: PRODUCT GRID                                                   */}
        {/* ========================================================================= */}
        <section aria-labelledby="doors-catalog-heading" className="mt-12">
          <h2 id="doors-catalog-heading" className="sr-only">
            Doors Catalog
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doors.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 3} />
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: ARCHITECTURAL DOOR SYSTEMS EXPLAINED                           */}
        {/* ========================================================================= */}
        <section className="mt-20 rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm sm:p-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F8F7E]">
            Engineering Quality
          </span>
          <h2 className="mt-2 text-2xl font-bold text-[#1E2328] sm:text-3xl">
            Why Architects Choose KK Indoors Door Systems
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7F8] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E3F4F1] text-lg text-[#0F8F7E]">
                ⚖️
              </div>
              <h3 className="mt-4 text-base font-bold text-[#1E2328]">
                Heavy Capacity Hardware
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Precision stainless steel tandem rollers and hydraulic pivot boxes tested to over 100,000 smooth cycles.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7F8] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E3F4F1] text-lg text-[#0F8F7E]">
                🚪
              </div>
              <h3 className="mt-4 text-base font-bold text-[#1E2328]">
                Flush Barrier-Free Thresholds
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Low profile bottom tracks recessed directly into flooring for seamless, zero-trip passage between living rooms and balconies.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F5F7F8] p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E3F4F1] text-lg text-[#0F8F7E]">
                🔒
              </div>
              <h3 className="mt-4 text-base font-bold text-[#1E2328]">
                Multi-Point High Security
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6B7280]">
                Concealed European shootbolts lock into the frame at 3 to 5 separate points simultaneously for maximum burglary protection.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: CUSTOM DOOR CONSULTATION CTA                                   */}
        {/* ========================================================================= */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-[#2D3339] bg-gradient-to-br from-[#1E2328] via-[#242A30] to-[#0F8F7E]/30 p-8 text-white shadow-2xl sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-block rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#14A693] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#0F8F7E]/30">
                Custom Door Engineering
              </span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Looking for Oversized Patio Sliders or Custom Front Doors?
              </h2>
              <p className="mt-3 text-sm text-[#D1D5DB] sm:text-base">
                Our design team will collaborate with your architect to select the optimal track system, glass thickness, and RAL powder coat finish.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0F8F7E]/30 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Request Quotation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
