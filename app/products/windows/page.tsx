import Link from "next/link";
import type { Metadata } from "next";
import { getWindowsProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Premium Windows | UPVC & Aluminium Systems | KK Indoors",
  description:
    "Explore our high-performance architectural windows. Featuring slimline aluminium sliding systems, multi-chamber UPVC casements, and acoustic double glazing.",
};

const WHATSAPP_LINK =
  "https://wa.me/9318335415?text=Hello%20KK%20Indoors,%20I%20am%20interested%20in%20windows%20for%20my%20project.%20Please%20share%20quotation%20and%20catalogs.";

const filterTabs = [
  { name: "All Windows", href: "/products/windows", active: true },
  { name: "Aluminium Windows", href: "/products/windows/aluminium", active: false },
  { name: "UPVC Windows", href: "/products/windows/upvc", active: false },
  { name: "Sliding Windows", href: "/products/windows/sliding", active: false },
];

export default function WindowsPage() {
  const windows = getWindowsProducts("all");

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
            Architectural Windows Collection
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Engineered for high wind-load resistance, acoustic serenity, and exceptional thermal insulation. From ultra-slim aluminium panoramic frames to weather-defending UPVC profiles.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* SECTION 2: CATEGORY FILTER TABS                                           */}
        {/* ========================================================================= */}
        <nav aria-label="Window sub-categories" className="mt-10 flex flex-wrap gap-2 border-b border-[#E5E7EB] pb-5">
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
        <section aria-labelledby="windows-catalog-heading" className="mt-12">
          <h2 id="windows-catalog-heading" className="sr-only">
            Windows Catalog
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {windows.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 2} />
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: COMPARISON GUIDE TABLE (UPVC vs Aluminium)                     */}
        {/* ========================================================================= */}
        <section className="mt-20 rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm sm:p-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F8F7E]">
            Material Guide
          </span>
          <h2 className="mt-2 text-2xl font-bold text-[#1E2328] sm:text-3xl">
            UPVC vs. Aluminium: Selecting the Best System
          </h2>
          <p className="mt-2 text-sm text-[#6B7280]">
            Both materials deliver superior performance over traditional timber, but excel in different applications:
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[550px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E5E7EB] bg-[#F5F7F8] text-[#1E2328]">
                  <th className="p-4 font-bold">Feature</th>
                  <th className="p-4 font-bold text-[#0F8F7E]">Aluminium Windows</th>
                  <th className="p-4 font-bold text-[#1E2328]">UPVC Windows</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-[#374151]">
                <tr>
                  <td className="p-4 font-semibold text-[#1E2328]">Frame Sightlines</td>
                  <td className="p-4">Ultra-slim 28mm – 45mm profiles for maximum glass</td>
                  <td className="p-4">Sturdier multi-chambered profiles (55mm – 70mm)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1E2328]">Thermal Performance</td>
                  <td className="p-4">Excellent when equipped with polyamide thermal break</td>
                  <td className="p-4">Exceptional natural insulator; lowest heat conduction</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1E2328]">Acoustic Insulation</td>
                  <td className="p-4">Up to 38 dB with acoustic laminated double glass</td>
                  <td className="p-4">Up to 42 dB with multi-chamber gaskets & DGU</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1E2328]">Corrosion & Rust</td>
                  <td className="p-4">Marine-grade anodized or powder-coated finish</td>
                  <td className="p-4">100% rustproof; immune to saline coastal moisture</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[#1E2328]">Ideal Applications</td>
                  <td className="p-4">Floor-to-ceiling facades, modern villas, expansive view panels</td>
                  <td className="p-4">Bedrooms, high-temperature zones, soundproofing near roads</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E7EB] pt-6">
            <p className="text-xs text-[#6B7280]">
              Want a comprehensive guide? Read our detailed homeowner comparison.
            </p>
            <Link
              href="/blog/upvc-vs-aluminium-windows-comparison"
              className="text-xs font-bold text-[#0F8F7E] hover:underline"
            >
              Read Full UPVC vs Aluminium Guide →
            </Link>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: CUSTOM WINDOW CONSULTATION CTA                                 */}
        {/* ========================================================================= */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-[#2D3339] bg-gradient-to-br from-[#1E2328] via-[#242A30] to-[#0F8F7E]/30 p-8 text-white shadow-2xl sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-block rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#14A693] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#0F8F7E]/30">
                Custom Window Fabrication
              </span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Need Custom Window Sizes or Technical Blueprints?
              </h2>
              <p className="mt-3 text-sm text-[#D1D5DB] sm:text-base">
                Send your floor plans or elevation drawings to our fenestration engineers on WhatsApp for free profile calculation and estimated cost.
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
                Book Site Survey
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
