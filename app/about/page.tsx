import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getWhatsAppUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About Us | KK Indoors - Premium Windows & Doors",
  description:
    "Learn about KK Indoors, our architectural craftsmanship, commitment to sustainable materials, and high-performance UPVC and Aluminium systems.",
};

const WHATSAPP_LINK = getWhatsAppUrl();

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F7F8] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Hero Section */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-[#A7E0D6]/60 bg-[#E3F4F1] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0F8F7E]">
              About KK Indoors
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1E2328] sm:text-5xl">
              Pioneering Modern Architectural Fenestration
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#6B7280]">
              At KK Indoors, we specialize in manufacturing and installing premium UPVC and Aluminium windows and doors engineered for energy conservation, acoustic insulation, and contemporary elegance.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#E5E7EB] pt-6">
              <div>
                <p className="text-2xl font-black text-[#0F8F7E]">10+ Yrs</p>
                <p className="mt-1 text-xs text-[#6B7280]">Fenestration Craft</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0F8F7E]">CNC</p>
                <p className="mt-1 text-xs text-[#6B7280]">Precision Engineered</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0F8F7E]">40+ dB</p>
                <p className="mt-1 text-xs text-[#6B7280]">Noise Reduction</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-2xl ring-1 ring-[#0F8F7E]/10">
            <Image
              src="/assets/Untitled-design-30-min.jpg"
              alt="KK Indoors architectural fenestration and contemporary interior glazing"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-[#1E2328]/80 px-4 py-2 backdrop-blur-md">
              <p className="text-xs font-semibold text-white">✨ Certified Architectural Performance</p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
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

        {/* Visual Showcase Section */}
        <div className="mt-20">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[#A7E0D6]/60 bg-[#E3F4F1] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0F8F7E]">
              Craftsmanship In Action
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#1E2328] sm:text-4xl">
              Engineered for Modern Architecture
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-[#6B7280] sm:text-base">
              Explore how our bespoke window and door installations elevate residential and commercial projects.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:shadow-xl">
              <Image
                src="/assets/windows3.avif"
                alt="Architectural structural glazing and fixed facade windows"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2328]/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7E0D6]">Structural Glass</span>
                <h4 className="mt-0.5 text-base font-bold text-white">Modern Architectural Facades</h4>
              </div>
            </div>

            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:shadow-xl">
              <Image
                src="/assets/doors2.jpeg"
                alt="Seamless patio sliding door system connecting interior to balcony"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2328]/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7E0D6]">Smooth Operation</span>
                <h4 className="mt-0.5 text-base font-bold text-white">Patio & Balcony Sliding Doors</h4>
              </div>
            </div>

            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all hover:shadow-xl">
              <Image
                src="/assets/windows.avif"
                alt="Daylight interior living room with high-performance panoramic windows"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2328]/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7E0D6]">Acoustic & Thermal</span>
                <h4 className="mt-0.5 text-base font-bold text-white">Panoramic Daylight Living</h4>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl border border-[#2D3339] bg-gradient-to-br from-[#1E2328] via-[#242A30] to-[#0F8F7E]/30 p-8 text-center text-white shadow-xl sm:p-12">
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
