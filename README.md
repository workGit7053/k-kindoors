# KK Indoors — Architectural Windows & Doors Web Application

A commercial web application and architectural knowledge hub built for **KK Indoors**, a brand specializing in high-performance UPVC and Aluminium window profiles, panoramic patio sliding systems, acoustic double glazing, and custom entrance doors.

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**, with integrated **Cloudinary** media optimization and **Instant Navigation** support.

---

## 🌟 Key Features

- **Teal-and-White Architectural Theme:** Consistent design system using clean `#0F8F7E` primary teal accents, `#1E2328` dark charcoal typography, `#6B7280` slate gray metadata, and `#E3F4F1` light teal tints with smooth gradients.
- **Dedicated Windows & Doors Catalogs:**
  - Full product showcase with specifications (profile depth, glazing options, sound ratings, thermal U-values, and warranties).
  - Pre-rendered subcategory pages:
    - **Windows:** `/products/windows/aluminium`, `/products/windows/upvc`, `/products/windows/sliding`
    - **Doors:** `/products/doors/aluminium`, `/products/doors/upvc`, `/products/doors/sliding`, `/products/doors/glass`
  - UPVC vs. Aluminium architectural material comparison tables.
- **Knowledge Hub & Blog:**
  - 6 architectural guides covering frame comparisons, sliding door configurations, acoustic soundproofing, front door trends, and seasonal maintenance.
  - Interactive search and category filter pills (*All, Windows, Doors, Energy & Insulation, Design & Trends, Maintenance & Care*).
  - Next.js 16 Instant Navigation with `<Suspense>` streaming boundaries and loading skeletons.
- **Contact & Lead Generation:**
  - Interactive online consultation form with simulated submission and instant forwarding to WhatsApp.
  - Dedicated contact channels with official SVG brand logos: **WhatsApp**, **Direct Phone Call**, **Email CAD Plans**, and **Showroom Location**.
  - Embedded responsive Google Map with showroom hours and site survey information.
- **Cloudinary Image Optimization:**
  - Helper functions for auto-format (`f_auto`), auto-quality (`q_auto`), and smart cropping (`c_fill`).
  - Next.js `<Image />` optimization with remote pattern matching.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.4.2` | App Router, static generation (`SSG`), Partial Prefetching (`PPR`), dynamic routing |
| **React** | `19.3.0` | Modern Server and Client Component architecture, React Suspense |
| **TypeScript** | `5.x` | Strict type definitions for products, blog posts, authors, and configuration |
| **Tailwind CSS** | `4.x` | Modern utility-first styling with `@tailwindcss/turbopack` and CSS theme variables |
| **Cloudinary** | Remote CDN | Cloud-hosted responsive image transformations |
| **ESLint** | `9.x` | Strict linting rules with `eslint-config-next` |

---

## 📁 Project Structure

```
kkindoors/
├── app/                                 # Next.js App Router root
│   ├── about/
│   │   └── page.tsx                     # About Us company page & mission
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx                 # Dynamic article page with Suspense shell
│   │   └── page.tsx                     # Blog index with category filter & search
│   ├── contact/
│   │   └── page.tsx                     # Contact channels, Google Map & quote form
│   ├── products/
│   │   ├── doors/
│   │   │   ├── [category]/
│   │   │   │   └── page.tsx             # Pre-filtered door subcategories (aluminium, upvc, sliding, glass)
│   │   │   └── page.tsx                 # Doors Hub & architectural hardware breakdown
│   │   ├── windows/
│   │   │   ├── [category]/
│   │   │   │   └── page.tsx             # Pre-filtered window subcategories (aluminium, upvc, sliding)
│   │   │   └── page.tsx                 # Windows Hub & UPVC vs Aluminium comparison table
│   │   └── page.tsx                     # All Products overview hub
│   ├── globals.css                      # Tailwind v4 import & custom theme variables
│   ├── layout.tsx                       # Root layout (Metadata, sticky Navbar, Footer)
│   └── page.tsx                         # Homepage (Hero, value highlights, latest guides)
│
├── components/                          # Reusable UI presentation components
│   ├── BlogCard.tsx                     # Article card with Cloudinary image, badge & tags
│   ├── BlogList.tsx                     # Client component for category filters & search
│   ├── ContactForm.tsx                  # Interactive inquiry form with WhatsApp bridge
│   ├── FeaturedBlogHero.tsx             # Editorial banner for top featured blog story
│   ├── Footer.tsx                       # Dark charcoal brand footer with quick links
│   ├── HeroSection.tsx                  # Homepage hero banner with conversion CTAs
│   ├── Navbar.tsx                       # Sticky responsive navigation with desktop & mobile menus
│   └── ProductCard.tsx                  # Product card with spec pills & WhatsApp quote button
│
├── data/                                # Content and dataset layer
│   ├── blogs.ts                         # 6 rich dummy architectural blog posts
│   ├── heroData.ts                      # Homepage hero banner copy and image
│   └── products.ts                      # Window and door products catalog & query helpers
│
├── lib/                                 # Helper utilities
│   ├── blog.ts                          # Blog query functions (by slug, category, related)
│   └── cloudinary.ts                    # Cloudinary URL builder & transformation helper
│
├── types/                               # TypeScript interfaces and types
│   ├── blog.ts                          # BlogPost, Author, BlogCategory, BlogSection
│   └── product.ts                       # ProductItem, ProductSpecs, ProductCategory
│
├── public/                              # Static public assets (icons, logos)
├── .env.example                         # Example environment variables (Cloudinary setup)
├── next.config.ts                       # Next.js configuration & remote image patterns
├── package.json                         # Scripts & project dependencies
└── tsconfig.json                        # TypeScript compiler options
```

---

## 🎨 Color Palette Reference

| Role | Hex | Visual Application |
| :--- | :--- | :--- |
| **Primary Teal** | `#0F8F7E` | Action buttons, active navigation links, icons, checkmarks, badges |
| **Teal Gradient** | `from-[#0F8F7E] to-[#0D7A6B]` | Primary CTA buttons, WhatsApp action pills, featured badges |
| **Dark Charcoal** | `#1E2328` | Primary headlines, brand headers, consultation banners, footer |
| **Slate Gray** | `#6B7280` | Body descriptions, dates, secondary metadata, placeholders |
| **White** | `#FFFFFF` | Content card surfaces, navbar background |
| **Soft Off-White** | `#F5F7F8` | Page background, input fields, subtle section cards |
| **Light Teal Tint**| `#E3F4F1` | Icon background circles, topic tags, active filter pills, tip callouts |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v20.x or higher
- **npm**, **yarn**, or **pnpm**

### 2. Installation
```bash
git clone https://github.com/your-username/kkindoors.git
cd kkindoors
npm install
```

### 3. Environment Setup (Optional)
To use your personal Cloudinary account instead of the default Cloudinary demo cloud:
```bash
cp .env.example .env.local
```
Update `.env.local`:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build & Linting
```bash
# Run ESLint check
npm run lint

# Compile and statically export routes for production
npm run build

# Start the optimized production server
npm run start
```

---

## ⚙️ Customization Guide

### 1. Updating Contact Details & WhatsApp Number
- **WhatsApp & Phone:**  
  Update `CONTACT_CONFIG.whatsapp` and `CONTACT_CONFIG.phone` in [`app/contact/page.tsx`](file:///Users/gyanendra/work/kkindoors/app/contact/page.tsx).  
  Also update `WHATSAPP_PHONE` in [`components/ContactForm.tsx`](file:///Users/gyanendra/work/kkindoors/components/ContactForm.tsx) and [`components/Navbar.tsx`](file:///Users/gyanendra/work/kkindoors/components/Navbar.tsx).

### 2. Updating the Google Map
1. Open [Google Maps](https://maps.google.com) and search your business location.
2. Click **Share** → **Embed a map**.
3. Copy the URL inside the `src="..."` attribute.
4. Replace `mapEmbedUrl` inside `CONTACT_CONFIG` in [`app/contact/page.tsx`](file:///Users/gyanendra/work/kkindoors/app/contact/page.tsx).

### 3. Adding New Products
Edit [`data/products.ts`](file:///Users/gyanendra/work/kkindoors/data/products.ts) and append a new object adhering to the `ProductItem` schema in [`types/product.ts`](file:///Users/gyanendra/work/kkindoors/types/product.ts).

### 4. Adding New Blog Articles
Edit [`data/blogs.ts`](file:///Users/gyanendra/work/kkindoors/data/blogs.ts) and append a new object adhering to the `BlogPost` schema in [`types/blog.ts`](file:///Users/gyanendra/work/kkindoors/types/blog.ts). Next.js will automatically generate static routes at build time.

---

