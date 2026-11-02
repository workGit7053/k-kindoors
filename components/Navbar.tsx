"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Windows", href: "/products/windows" },
  { name: "Doors", href: "/products/doors" },
  { name: "Blogs", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const WHATSAPP_LINK = "https://wa.me/8851629191";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menus when route changes (adjusting state during render)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Close the mobile menu when switching to desktop width.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-5 lg:px-8"
      >
        {/* Logo */}

        <Image
          src="/LogoKK.png"
          alt="KK Windows & Doors logo"
          width={160}
          height={48}
          priority
          className="h-9 w-auto sm:h-10 lg:h-12"
        />

        {/* Desktop Navigation: 1024px and above */}
        <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap py-3 text-sm font-medium transition-colors hover:text-[#0F8F7E] ${isActive ? "font-semibold text-[#0F8F7E]" : "text-[#1E2328]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Quote Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#0F8F7E]/20 transition-all hover:from-[#14A693] hover:to-[#0F8F7E] hover:shadow-lg xl:inline-flex"
        >
          Get a Quote
        </a>

        {/* Mobile and Tablet Menu Button */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-2xl text-[#0F8F7E] transition-colors hover:bg-[#E3F4F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F8F7E] lg:hidden"
        >
          <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile and Tablet Navigation */}
      <div
        id="mobile-navigation"
        hidden={!isOpen}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[#E5E7EB] bg-white lg:hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex min-h-12 items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-[#E3F4F1] hover:text-[#0F8F7E] ${isActive ? "bg-[#E3F4F1] font-semibold text-[#0F8F7E]" : "text-[#1E2328]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Quote Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-5 py-3 text-center text-sm font-semibold text-white shadow-md shadow-[#0F8F7E]/20 transition-all hover:from-[#14A693] hover:to-[#0F8F7E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F8F7E]"
            >
              Get a Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
