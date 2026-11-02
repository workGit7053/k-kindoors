import Image from "next/image";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/918851629191";
const PHONE_DISPLAY = "+91 85277 21904";
const PHONE_HREF = "tel:+918527721904";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Knowledge hub", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Windows",
    links: [
      { label: "All windows", href: "/products/windows" },
      { label: "UPVC windows", href: "/products/windows" },
      { label: "Aluminium windows", href: "/products/windows" },
      { label: "Window guides", href: "/blog/upvc-vs-aluminium-windows-comparison" },
    ],
  },
  {
    title: "Doors",
    links: [
      { label: "All doors", href: "/products/doors" },
      { label: "UPVC doors", href: "/products/doors" },
      { label: "Aluminium doors", href: "/products/doors" },
      { label: "Door inspiration", href: "/blog/top-front-door-styles-curb-appeal" },
    ],
  },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2BC4AE]";

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1E2328] text-[#A7AEB8]">
      {/* thin teal rule marks the footer's top edge */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-[#0F8F7E] to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Quote band: the one prominent element */}
        <div className="border-b border-[#2F363D] py-10 sm:py-12">
          <div className="flex flex-col gap-6 rounded-2xl bg-[#252B31] p-6 ring-1 ring-inset ring-[#2F363D] sm:p-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="max-w-xl">
              <p className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                Planning new windows or doors?
              </p>
              <p className="mt-2 text-sm leading-6 sm:text-base">
                Send your room sizes on WhatsApp and we&apos;ll reply with a
                quote.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#0F8F7E] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-[#0F8F7E]/20 transition-colors hover:bg-[#14A693] active:bg-[#0D7D6E] md:w-auto md:shrink-0 ${focusRing}`}
            >
              <ChatIcon />
              Get a WhatsApp quote
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:py-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-x-12">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="KK Indoors home"
              className={`inline-flex rounded-sm ${focusRing}`}
            >
              <Image
                src="/LogoKK.png"
                alt="KK Indoors"
                width={160}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7">
              Thoughtfully designed UPVC and aluminium windows and doors for
              comfortable, light-filled spaces.
            </p>
            <a
              href={PHONE_HREF}
              className={`mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#2BC4AE] ${focusRing}`}
            >
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold tracking-wide text-white">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-1 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`inline-block rounded-sm py-1.5 underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:text-white hover:decoration-[#2BC4AE] ${focusRing}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-[#2F363D] py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KK Indoors. All rights reserved.</p>
          <p>UPVC &amp; aluminium windows and doors</p>
        </div>
      </div>
    </footer>
  );
}
