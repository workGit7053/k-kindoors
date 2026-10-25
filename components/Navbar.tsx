"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Windows",
    href: "/products/windows",
    submenu: [
      { name: "All Windows", href: "/products/windows" },
      { name: "Aluminium Windows", href: "/products/windows/aluminium" },
      { name: "UPVC Windows", href: "/products/windows/upvc" },
      { name: "Sliding Windows", href: "/products/windows/sliding" },
    ],
  },
  {
    name: "Doors",
    href: "/products/doors",
    submenu: [
      { name: "All Doors", href: "/products/doors" },
      { name: "Aluminium Doors", href: "/products/doors/aluminium" },
      { name: "UPVC Doors", href: "/products/doors/upvc" },
      { name: "Sliding Doors", href: "/products/doors/sliding" },
      { name: "Glass Doors", href: "/products/doors/glass" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const WHATSAPP_LINK = "https://wa.me/YOUR_PHONE_NUMBER";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menus when route changes (adjusting state during render)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setOpenDropdown(null);
  }

  // Close the mobile menu when switching to desktop width.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7d8] bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-5 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="shrink-0 text-xl font-bold tracking-tight text-[#606b3b] sm:text-2xl"
        >
          KK <span className="text-[#353a26]">Indoors</span>
        </Link>

        {/* Desktop Navigation: 1024px and above */}
        <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            if (link.submenu) {
              const isDropdownOpen = openDropdown === link.name;

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    aria-expanded={isDropdownOpen}
                    onClick={() =>
                      setOpenDropdown(isDropdownOpen ? null : link.name)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setOpenDropdown(null);
                      }
                    }}
                    className={`flex items-center gap-1 whitespace-nowrap py-3 text-sm font-medium transition-colors hover:text-[#7b8748] ${
                      isActive ? "text-[#687344]" : "text-[#454936]"
                    }`}
                  >
                    {link.name}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`h-4 w-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="m5 7.5 5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 top-full z-50 w-60 pt-1">
                      <div className="rounded-xl border border-[#e5e7d8] bg-white p-2 shadow-lg">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block rounded-lg px-3 py-3 text-sm transition-colors hover:bg-[#f3f4eb] hover:text-[#687344] ${
                              pathname === item.href
                                ? "bg-[#f3f4eb] font-semibold text-[#687344]"
                                : "text-[#454936]"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap py-3 text-sm font-medium transition-colors hover:text-[#7b8748] ${
                  isActive ? "text-[#687344]" : "text-[#454936]"
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
          className="hidden shrink-0 rounded-full bg-[#687344] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#515b32] xl:inline-flex"
        >
          Get a Quote
        </a>

        {/* Mobile and Tablet Menu Button */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setOpenDropdown(null);
          }}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-2xl text-[#606b3b] transition-colors hover:bg-[#f3f4eb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687344] lg:hidden"
        >
          <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile and Tablet Navigation */}
      <div
        id="mobile-navigation"
        hidden={!isOpen}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[#e5e7d8] bg-white lg:hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));

              if (link.submenu) {
                const isDropdownOpen = openDropdown === link.name;

                return (
                  <div key={link.name}>
                    <button
                      type="button"
                      aria-expanded={isDropdownOpen}
                      onClick={() =>
                        setOpenDropdown(isDropdownOpen ? null : link.name)
                      }
                      className={`flex min-h-12 w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors hover:bg-[#f3f4eb] ${
                        isActive ? "text-[#687344]" : "text-[#454936]"
                      }`}
                    >
                      {link.name}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`h-4 w-4 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="m5 7.5 5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <div className="ml-3 border-l-2 border-[#e5e7d8] py-1 pl-3">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                            className={`flex min-h-11 items-center rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[#f3f4eb] hover:text-[#687344] ${
                              pathname === item.href
                                ? "font-semibold text-[#687344]"
                                : "text-[#606b3b]"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex min-h-12 items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-[#f3f4eb] hover:text-[#687344] ${
                    isActive ? "text-[#687344]" : "text-[#454936]"
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
              className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-[#687344] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#515b32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687344]"
            >
              Get a Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}