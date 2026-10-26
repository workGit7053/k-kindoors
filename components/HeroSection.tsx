import Image from "next/image";
import Link from "next/link";

export type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
};

export default function HeroSection({
  title,
  subtitle,
  description,
  image,
  buttonText,
  buttonLink,
}: HeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full border border-[#A7E0D6]/60 bg-[#E3F4F1] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0F8F7E]">
            {subtitle}
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1E2328] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-base leading-relaxed text-[#6B7280] sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0F8F7E]/25 transition-all hover:from-[#14A693] hover:to-[#0F8F7E] hover:shadow-xl hover:shadow-[#0F8F7E]/30"
            >
              {buttonText}
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-7 py-3.5 text-sm font-semibold text-[#1E2328] shadow-sm transition-all hover:border-[#0F8F7E]/50 hover:bg-[#E3F4F1]/40 hover:text-[#0F8F7E]"
            >
              Read Window & Door Guides →
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-2xl ring-1 ring-[#0F8F7E]/10">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
