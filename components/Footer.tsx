import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/9318335415";

export default function Footer() {
  return (
    <footer className="border-t border-[#2A3138] bg-[#1E2328] text-[#9CA3AF]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-white"
            >
              KK <span className="text-[#0F8F7E]">Indoors</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#9CA3AF]">
              Crafting architectural excellence in premium UPVC and Aluminium
              windows and doors. Designed for maximum daylight, superior acoustic
              insulation, and enduring energy efficiency.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#0F8F7E]/25 transition-all hover:from-[#14A693] hover:to-[#0F8F7E]"
              >
                <span>💬</span>
                <span>Get a WhatsApp Quote</span>
              </a>
            </div>
          </div>

          {/* Windows Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Windows
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/products/windows"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  All Windows
                </Link>
              </li>
              <li>
                <Link
                  href="/products/windows"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  Aluminium Windows
                </Link>
              </li>
              <li>
                <Link
                  href="/products/windows"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  UPVC Windows
                </Link>
              </li>
              <li>
                <Link
                  href="/products/windows"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  Sliding Windows
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/double-glazed-windows-energy-efficiency"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  Acoustic & Double Glazed
                </Link>
              </li>
            </ul>
          </div>

          {/* Doors Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Doors
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/products/doors"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  All Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/products/doors"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  Aluminium Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/products/doors"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  UPVC Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/products/doors"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  Sliding Patio Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/top-front-door-styles-curb-appeal"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  Pivot & Entrance Doors
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Blog */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Resources & Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#0F8F7E]">
                  Knowledge Hub & Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/upvc-vs-aluminium-windows-comparison"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  UPVC vs Aluminium Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-[#0F8F7E]">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[#0F8F7E]"
                >
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#2A3138] pt-8 text-xs text-[#6B7280] sm:flex-row">
          <p>© 2026 KK Indoors. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/blog" className="hover:text-[#0F8F7E] transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-[#0F8F7E] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#0F8F7E] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
