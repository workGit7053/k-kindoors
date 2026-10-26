import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | KK Indoors - Premium Windows & Doors",
  description:
    "Learn about KK Indoors, our architectural craftsmanship, commitment to sustainable materials, and high-performance UPVC and Aluminium systems.",
};

const WHATSAPP_LINK = "https://wa.me/9318335415";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F7F8] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-[#A7E0D6]/60 bg-[#E3F4F1] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0F8F7E]">
            About KK Indoors
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1E2328] sm:text-5xl">
            Pioneering Modern Architectural Fenestration
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#6B7280]">
            At KK Indoors, we specialize in manufacturing and installing premium UPVC and Aluminium windows and doors engineered for energy conservation, acoustic insulation, and contemporary elegance.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-all hover:border-[#0F8F7E]/40 hover:shadow-lg hover:shadow-[#0F8F7E]/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E3F4F1] to-[#C9EEE7] text-xl text-[#0F8F7E]">
              📐
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#1E2328]">
              Precision Craftsmanship
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
              Every window and door profile is cut, reinforced, and glazed using modern CNC machinery to ensure airtight tolerances and flawless glide action.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-all hover:border-[#0F8F7E]/40 hover:shadow-lg hover:shadow-[#0F8F7E]/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E3F4F1] to-[#C9EEE7] text-xl text-[#0F8F7E]">
              🌿
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#1E2328]">
              Energy & Climate Defense
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
              Featuring advanced thermal-break aluminium and multi-chambered UPVC profiles that keep extreme weather outside and slash cooling bills.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-all hover:border-[#0F8F7E]/40 hover:shadow-lg hover:shadow-[#0F8F7E]/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E3F4F1] to-[#C9EEE7] text-xl text-[#0F8F7E]">
              🤝
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#1E2328]">
              Turnkey Consultation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
              From blueprint review and site surveys to precision installation and warranty support, we guide architects and homeowners every step of the way.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-[#2D3339] bg-gradient-to-br from-[#1E2328] via-[#242A30] to-[#0F8F7E]/30 p-8 text-center text-white shadow-xl sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to upgrade your home with KK Indoors?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#D1D5DB] sm:text-base">
            Contact our engineering team today for architectural consultations and instant estimates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0F8F7E]/30 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
            >
              Get a WhatsApp Quote
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Read Our Knowledge Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
