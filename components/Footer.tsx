import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/YOUR_PHONE_NUMBER";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7d8] bg-[#1e2213] text-[#cfd4be]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-white"
            >
              KK <span className="text-[#a4b568]">Indoors</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#a8af92]">
              Crafting architectural excellence in premium UPVC and Aluminium
              windows and doors. Designed for maximum daylight, superior acoustic
              insulation, and enduring energy efficiency.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#687344] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#525b33]"
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
                  className="transition-colors hover:text-white"
                >
                  All Windows
                </Link>
              </li>
              <li>
                <Link
                  href="/products/windows"
                  className="transition-colors hover:text-white"
                >
                  Aluminium Windows
                </Link>
              </li>
              <li>
                <Link
                  href="/products/windows"
                  className="transition-colors hover:text-white"
                >
                  UPVC Windows
                </Link>
              </li>
              <li>
                <Link
                  href="/products/windows"
                  className="transition-colors hover:text-white"
                >
                  Sliding Windows
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/double-glazed-windows-energy-efficiency"
                  className="transition-colors hover:text-white"
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
                  className="transition-colors hover:text-white"
                >
                  All Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/products/doors"
                  className="transition-colors hover:text-white"
                >
                  Aluminium Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/products/doors"
                  className="transition-colors hover:text-white"
                >
                  UPVC Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/products/doors"
                  className="transition-colors hover:text-white"
                >
                  Sliding Patio Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/top-front-door-styles-curb-appeal"
                  className="transition-colors hover:text-white"
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
                <Link href="/blog" className="transition-colors hover:text-white">
                  Knowledge Hub & Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/upvc-vs-aluminium-windows-comparison"
                  className="transition-colors hover:text-white"
                >
                  UPVC vs Aluminium Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#313620] pt-8 text-xs text-[#8c9474] sm:flex-row">
          <p>© 2026 KK Indoors. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link href="/about" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
