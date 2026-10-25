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
          <span className="inline-block rounded-full bg-[#f0f2e8] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#687344]">
            {subtitle}
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#222515] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center rounded-full bg-[#687344] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#525b33]"
            >
              {buttonText}
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-[#d8dac7] bg-white px-7 py-3.5 text-sm font-semibold text-[#3e4428] transition-colors hover:bg-[#f3f4eb]"
            >
              Read Window & Door Guides →
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#e5e7d8] bg-gray-100 shadow-xl">
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
