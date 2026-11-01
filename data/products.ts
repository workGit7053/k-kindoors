import { ProductItem } from "@/types/product";

export const productsData: ProductItem[] = [
  // =========================================================================
  // WINDOWS COLLECTION
  // =========================================================================
  {
    id: "win-1",
    slug: "slimline-aluminium-sliding-windows",
    title: "Slimline Aluminium Sliding Windows",
    tagline: "Panoramic views with ultra-narrow 28mm architectural sightlines",
    category: "windows",
    subCategory: "sliding",
    material: "aluminium",
    windowType: "sliding",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Engineered with structural aerospace-grade 6063-T6 aluminium alloy, our slimline sliding windows offer whisper-quiet gliding, maximum daylight transmission, and weather-defending compression seals.",
    keyFeatures: [
      "28mm ultra-narrow interlocking stile for panoramic outdoor view",
      "Concealed multi-point deadbolts with anti-lift safety blocks",
      "Precision stainless steel Grade 304 ball-bearing tandem rollers",
      "Integrated heavy-duty mosquito mesh channel option",
    ],
    specs: {
      profileDepth: "65mm - 90mm frame depth",
      glassOptions: "6mm toughened to 24mm double-glazed DGU",
      soundInsulation: "Up to 34 dB sound reduction",
      thermalPerformance: "Polyamide thermal-break bar barrier",
      hardware: "European multipoint locking handles",
      warranty: "15-year structural warranty",
    },
    bestFor: "Living rooms, high-rise luxury apartments, and scenic view facades",
    guideSlug: "upvc-vs-aluminium-windows-comparison",
  },
  {
    id: "win-2",
    slug: "upvc-thermal-casement-windows",
    title: "UPVC Multi-Chamber Casement Windows",
    tagline: "Unbeatable energy conservation and total weatherproofing",
    category: "windows",
    subCategory: "upvc",
    material: "upvc",
    windowType: "casement",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Custom multi-chambered UPVC casement windows reinforced with galvanized steel cores. Designed to withstand heavy tropical monsoons, direct solar heat, and coastal saline humidity with zero rotting or rusting.",
    keyFeatures: [
      "5-chamber thermal internal matrix prevents heat transfer",
      "Twin EPDM continuous rubber gasket compression seals",
      "Heavy duty friction stays open smoothly up to 90 degrees",
      "Available in Anthracite Grey, Teak, Walnut & Pristine White",
    ],
    specs: {
      profileDepth: "60mm multi-chamber profile",
      glassOptions: "Single 6mm / Double 24mm Argon Low-E",
      soundInsulation: "Up to 38 dB acoustic dampening",
      thermalPerformance: "U-value ≤ 1.4 W/m²K",
      hardware: "Espagnolette multi-point shootbolts",
      warranty: "20-year profile colorfast warranty",
    },
    bestFor: "Bedrooms, study rooms, coastal homes, and extreme weather climates",
    guideSlug: "soundproof-windows-city-living",
  },
  {
    id: "win-3",
    slug: "architectural-aluminium-tilt-turn-windows",
    title: "Architectural Aluminium Tilt & Turn Windows",
    tagline: "Dual-action versatility: top ventilation or full inward swing",
    category: "windows",
    subCategory: "aluminium",
    material: "aluminium",
    windowType: "tilt-turn",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "A dual-function engineering marvel: tilt inward at the top for secure draft-free ventilation during rain, or turn the handle to swing wide open for effortless glass cleaning from inside.",
    keyFeatures: [
      "Single handle switches between micro-vent tilt and full turn",
      "Thermal-break insulation prevents internal condensation",
      "Perimeter multi-locking pins around all 4 sash edges",
      "Qualicoat powder coating available in over 150 RAL colors",
    ],
    specs: {
      profileDepth: "70mm thermally broken system",
      glassOptions: "28mm triple-glazed or acoustic laminated",
      soundInsulation: "Up to 42 dB acoustic dampening",
      thermalPerformance: "U-value ≤ 1.2 W/m²K",
      hardware: "Heavy-duty concealed European hinges",
      warranty: "15-year comprehensive warranty",
    },
    bestFor: "High-wind zones, luxury bedrooms, city residences near traffic",
    guideSlug: "double-glazed-windows-energy-efficiency",
  },
  {
    id: "win-4",
    slug: "upvc-smooth-glide-sliding-windows",
    title: "UPVC Smooth-Glide Sliding Windows",
    tagline: "Effortless space optimization with low-friction polymer tracks",
    category: "windows",
    subCategory: "sliding",
    material: "upvc",
    windowType: "sliding",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Our UPVC sliding window systems deliver effortless horizontal gliding without occupying internal room space. Built with specialized dust-defending wool-pile weatherstrips to keep city dust out.",
    keyFeatures: [
      "Multi-track options: 2-track, 2.5-track, or 3-track with mesh",
      "Integrated drainage weep holes channel rainwater outward",
      "Steel-reinforced sashes prevent deflection under wind load",
      "UV-stabilized formulation resists yellowing and chalking",
    ],
    specs: {
      profileDepth: "80mm - 110mm track options",
      glassOptions: "5mm to 20mm insulated glass",
      soundInsulation: "Up to 30 dB noise reduction",
      thermalPerformance: "Natural polymer insulating properties",
      hardware: "Crescent and pop-up touch locks",
      warranty: "15-year warranty",
    },
    bestFor: "Kitchen counters, balconies, utility rooms, and compact apartments",
    guideSlug: "maintenance-guide-doors-windows",
  },
  {
    id: "win-5",
    slug: "upvc-top-hung-windows",
    title: "UPVC Top Hung Awning Windows",
    tagline: "Outward-pushing top ventilation with integrated rain deflector",
    category: "windows",
    subCategory: "upvc",
    material: "upvc",
    windowType: "top-hung",
    image:
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Engineered with top hinges and precision multi-point friction stays that allow the bottom sash to push outward safely. Designed for rainproof, draft-free ventilation even during heavy monsoon downpours.",
    keyFeatures: [
      "Top-hinged friction stays maintain smooth opening at any angle",
      "Twin continuous EPDM perimeter seals prevent water ingress",
      "Concealed multi-point perimeter locks for burglary resistance",
      "Ideal for bathrooms, staircases, and high-rise apartment bedrooms",
    ],
    specs: {
      profileDepth: "60mm multi-chamber profile",
      glassOptions: "6mm frosted privacy / 24mm frosted DGU",
      soundInsulation: "Up to 36 dB sound reduction",
      thermalPerformance: "U-value ≤ 1.4 W/m²K",
      hardware: "Heavy-duty Grade 304 stainless steel friction stays",
      warranty: "15-year profile warranty",
    },
    bestFor: "Bathrooms, kitchens, high-rise utility corridors, and stairwells",
    guideSlug: "soundproof-windows-city-living",
  },
  {
    id: "win-6",
    slug: "upvc-french-windows",
    title: "UPVC French Windows",
    tagline: "Double outward opening sashes without central mullion for panoramic vistas",
    category: "windows",
    subCategory: "upvc",
    material: "upvc",
    windowType: "french",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Classic French double-sash casement windows featuring flying mullion construction. When both sashes are pushed wide open, enjoy an entirely unobstructed panoramic opening without a central vertical post.",
    keyFeatures: [
      "Flying mullion design leaves 100% clear aperture when opened",
      "Independent multi-point shootbolt locking on secondary master leaf",
      "Internal galvanized steel reinforcement cores resist heavy wind loads",
      "Available with Georgian decorative bars and integrated insect screen",
    ],
    specs: {
      profileDepth: "60mm - 70mm multi-chamber profile",
      glassOptions: "8mm toughened or 24mm acoustic laminated DGU",
      soundInsulation: "Up to 39 dB sound dampening",
      thermalPerformance: "U-value ≤ 1.3 W/m²K",
      hardware: "Dual espagnolette multi-point shootbolts",
      warranty: "20-year profile colorfast warranty",
    },
    bestFor: "Balconies, master bedrooms, heritage villas, and garden verandas",
    guideSlug: "upvc-vs-aluminium-windows-comparison",
  },
  {
    id: "win-7",
    slug: "upvc-fix-windows",
    title: "UPVC Fix Windows (Picture Windows)",
    tagline: "Maximum daylight and total acoustic hermetic sealing",
    category: "windows",
    subCategory: "upvc",
    material: "upvc",
    windowType: "fixed",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Non-opening architectural fixed picture windows designed to flood indoor spaces with daylight while offering the absolute highest level of acoustic and thermal insulation available in fenestration.",
    keyFeatures: [
      "100% hermetically sealed stationary frame eliminates air and dust leakage",
      "Supports massive single-span laminated or insulated glass panes",
      "Thick multi-chamber walls block street traffic acoustics",
      "Zero mechanical moving parts for lifetime maintenance-free longevity",
    ],
    specs: {
      profileDepth: "60mm - 80mm profile depth",
      glassOptions: "Up to 32mm acoustic laminated triple glazing",
      soundInsulation: "Up to 44 dB acoustic isolation",
      thermalPerformance: "U-value ≤ 1.1 W/m²K",
      hardware: "Galvanized steel structural reinforcement core",
      warranty: "20-year structural & colorfast warranty",
    },
    bestFor: "Living rooms, high-rise facades, staircases, and roadside bedrooms",
    guideSlug: "double-glazed-windows-energy-efficiency",
  },
  {
    id: "win-8",
    slug: "upvc-sliding-with-fix-windows",
    title: "UPVC Sliding with Fix Windows",
    tagline: "Seamless hybrid pairing stationary panoramic glass with smooth sliding sash",
    category: "windows",
    subCategory: "sliding",
    material: "upvc",
    windowType: "sliding-fixed",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "A versatile combination window unit integrating a large stationary fixed picture window with one or two whisper-quiet horizontal sliding sashes. Combines uncompromised scenic views with controlled fresh airflow.",
    keyFeatures: [
      "Integrated fixed + sliding sash in a unified monolithic outer frame",
      "Tandem stainless steel rollers glide effortlessly on polymer tracks",
      "Dedicated track for stainless steel mosquito mesh screen",
      "Multi-point anti-lift locking mechanism on sliding sash",
    ],
    specs: {
      profileDepth: "88mm - 112mm multi-track combination frame",
      glassOptions: "6mm toughened / 20mm insulated DGU",
      soundInsulation: "Up to 35 dB sound reduction",
      thermalPerformance: "Multi-chamber weather seal barrier",
      hardware: "Touch lock / pop-up ergonomic handles",
      warranty: "15-year warranty",
    },
    bestFor: "Living room verandas, study rooms, dining areas, and balconies",
    guideSlug: "maintenance-guide-doors-windows",
  },

  // =========================================================================
  // DOORS COLLECTION
  // =========================================================================
  {
    id: "door-1",
    slug: "heavy-duty-aluminium-sliding-patio-doors",
    title: "Heavy-Duty Aluminium Sliding Patio Doors",
    tagline: "Expansive multi-panel sliders connecting interiors to nature",
    category: "doors",
    subCategory: "sliding",
    material: "aluminium",
    doorType: "sliding",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Create monumental architectural openings with our heavy-duty sliding patio doors. Capable of handling glass panels up to 3 meters tall with seamless feather-light fingertip gliding on stainless steel tracks.",
    keyFeatures: [
      "Accommodates up to 300kg per glass sash with silent glide",
      "Zero-barrier flush floor threshold prevents tripping",
      "4-point concealed deadbolt locks with anti-pry security plates",
      "Double and triple track configurations for up to 6 sliding panels",
    ],
    specs: {
      profileDepth: "120mm - 160mm track frame",
      glassOptions: "10mm toughened to 32mm acoustic DGU",
      soundInsulation: "Up to 37 dB noise reduction",
      thermalPerformance: "Polyamide thermal-break barrier",
      hardware: "Minimal architectural pull handle with key lock",
      warranty: "15-year mechanical warranty",
    },
    bestFor: "Patio walkouts, villa balconies, terrace gardens, poolside lounges",
    guideSlug: "modern-sliding-glass-doors-guide",
  },
  {
    id: "door-2",
    slug: "oversized-architectural-pivot-entrance-doors",
    title: "Oversized Architectural Pivot Entrance Doors",
    tagline: "A majestic first impression with bold minimalist proportions",
    category: "doors",
    subCategory: "pivot",
    material: "aluminium",
    doorType: "pivot",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Make an extraordinary architectural statement at your main entrance. Instead of traditional side hinges, these doors rotate smoothly on concealed floor-pivot boxes, supporting widths up to 1.8 meters.",
    keyFeatures: [
      "Heavy-duty hydraulic floor spring with 90-degree hold-open",
      "Seamless integration with biometric fingerprint & digital smart locks",
      "Thermally insulated core clad in architectural textured aluminium",
      "Vertical brushed stainless steel designer pull handle",
    ],
    specs: {
      profileDepth: "75mm - 90mm reinforced door leaf",
      glassOptions: "Fluted privacy glass sidelights available",
      soundInsulation: "Up to 39 dB sound insulation",
      thermalPerformance: "High-density polyurethane insulating core",
      hardware: "DORMA / Hafele heavy pivot system",
      warranty: "10-year comprehensive warranty",
    },
    bestFor: "Main front villa entrances, contemporary bungalows, commercial foyers",
    guideSlug: "top-front-door-styles-curb-appeal",
  },
  {
    id: "door-3",
    slug: "upvc-multi-chamber-balcony-sliding-doors",
    title: "UPVC Sliding Doors",
    tagline: "Acoustic peace, monsoon sealing, and integrated insect screen",
    category: "doors",
    subCategory: "upvc",
    material: "upvc",
    doorType: "sliding",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Designed specifically for high-rise apartment balconies and bedroom verandas where wind-driven monsoon rain and city noise are constant challenges. Multi-chamber UPVC profiles block drafts completely.",
    keyFeatures: [
      "Integrated 3rd track with durable stainless steel mesh insect screen",
      "Double weather-gasket seals prevent water leakage during monsoons",
      "Internal galvanized steel reinforcement ribs resist wind flexing",
      "Non-conductive polymer prevents thermal heat radiating into rooms",
    ],
    specs: {
      profileDepth: "112mm 3-track frame depth",
      glassOptions: "8mm to 24mm toughened safety glass",
      soundInsulation: "Up to 36 dB acoustic dampening",
      thermalPerformance: "Multi-chamber thermal barrier",
      hardware: "Ergonomic multi-point locking handles",
      warranty: "20-year profile colorfast warranty",
    },
    bestFor: "Master bedroom balconies, high-rise apartments, coastal verandas",
    guideSlug: "maintenance-guide-doors-windows",
  },
  {
    id: "door-4",
    slug: "frameless-toughened-glass-doors",
    title: "Frameless Toughened Glass Doors & Partitions",
    tagline: "Clean transparency for contemporary interiors and offices",
    category: "doors",
    subCategory: "glass",
    material: "glass",
    doorType: "glass",
    image:
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Achieve optical clarity and spacious fluidity with our frameless 12mm toughened safety glass doors. Equipped with brushed steel patch fittings, hydraulic floor springs, and frosted privacy bands if desired.",
    keyFeatures: [
      "12mm Grade-A toughened safety glass with polished beveled edges",
      "Double-action swing: pushes inward and pulls outward smoothly",
      "Sleek architectural patch fittings in matte black or satin steel",
      "Custom frosted, fluted, or tinted glass treatment options",
    ],
    specs: {
      profileDepth: "Frameless system with slim patch fittings",
      glassOptions: "10mm or 12mm clear / ultra-clear / frosted",
      soundInsulation: "Up to 28 dB",
      thermalPerformance: "Interior partition grade",
      hardware: "Grade 304 stainless steel floor pivot & top pivot",
      warranty: "10-year hardware warranty",
    },
    bestFor: "Office conference rooms, master bathroom suites, study room dividers",
    guideSlug: "modern-sliding-glass-doors-guide",
  },
  {
    id: "door-5",
    slug: "aluminium-bifold-folding-patio-doors",
    title: "Aluminium Bi-Fold Panoramic Folding Doors",
    tagline: "Open up to 90% of your wall for seamless indoor-outdoor living",
    category: "doors",
    subCategory: "aluminium",
    material: "aluminium",
    doorType: "slide-and-fold",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Concertina folding doors that concertina neatly to the edge, opening up almost the entire width of your room. Enjoy unobstructed garden views and an expansive entertainment lounge when entertaining guests.",
    keyFeatures: [
      "Panels fold and stack flat against the wall either inside or outside",
      "Bottom-weighted smooth roller carriage ensures effortless movement",
      "Thermal-break aluminium profiles ensure cool indoor comfort",
      "Configurable from 3 panels up to 8 continuous folding leaves",
    ],
    specs: {
      profileDepth: "70mm thermally broken system",
      glassOptions: "24mm double-glazed tempered Low-E",
      soundInsulation: "Up to 36 dB acoustic reduction",
      thermalPerformance: "U-value ≤ 1.5 W/m²K",
      hardware: "Heavy-duty concealed stainless steel hinge pins",
      warranty: "15-year comprehensive warranty",
    },
    bestFor: "Garden decks, terrace bar areas, pool houses, restaurant facades",
    guideSlug: "upvc-vs-aluminium-windows-comparison",
  },
  {
    id: "door-6",
    slug: "upvc-casement-doors",
    title: "UPVC Casement Doors",
    tagline: "Airtight double compression seals with multi-point perimeter security",
    category: "doors",
    subCategory: "upvc",
    material: "upvc",
    doorType: "casement",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Heavy-duty UPVC hinged casement doors built with thick multi-chambered profiles and internal galvanized steel stiffeners. Engineered with continuous dual EPDM rubber gaskets for complete weatherproofing, noise reduction, and thermal insulation.",
    keyFeatures: [
      "Twin EPDM rubber compression gaskets guarantee zero air or water leakage",
      "Multi-point European shootbolt locks engage at 4 frame points",
      "Heavy-duty 3D adjustable security hinges tested to 100,000 cycles",
      "Available with Low-E double glazing or acoustic laminated security glass",
    ],
    specs: {
      profileDepth: "60mm - 70mm multi-chamber profile",
      glassOptions: "8mm toughened to 28mm acoustic laminated DGU",
      soundInsulation: "Up to 38 dB noise reduction",
      thermalPerformance: "U-value ≤ 1.3 W/m²K",
      hardware: "Espagnolette multi-point shootbolts & lever handle",
      warranty: "20-year profile colorfast warranty",
    },
    bestFor: "Balconies, terraces, patio walkouts, villa backyards, and entrance foyers",
    guideSlug: "upvc-vs-aluminium-windows-comparison",
  },
  {
    id: "door-7",
    slug: "upvc-slide-and-fold-doors",
    title: "UPVC Slide and Fold Doors",
    tagline: "Panoramic concertina panels opening 90% of your aperture seamlessly",
    category: "doors",
    subCategory: "upvc",
    material: "upvc",
    doorType: "slide-and-fold",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&h=550&q=80",
    description:
      "Monumental UPVC slide and fold panoramic doors. The individual door sashes concertina effortlessly along high-grade stainless steel tracks and fold flat against the wall, merging indoor spaces with balconies and gardens.",
    keyFeatures: [
      "Panels fold and stack flat to either side for 90% wide-open view",
      "Precision stainless steel Grade 304 tandem bogie rollers for smooth slide",
      "Multi-chamber thermal UPVC frames insulate against summer heat and monsoon rain",
      "Flush floor threshold option for seamless barrier-free transit",
    ],
    specs: {
      profileDepth: "70mm multi-chamber track profile",
      glassOptions: "10mm toughened to 28mm acoustic DGU",
      soundInsulation: "Up to 37 dB noise reduction",
      thermalPerformance: "U-value ≤ 1.4 W/m²K",
      hardware: "Heavy-duty concealed stainless steel concertina hardware",
      warranty: "15-year comprehensive warranty",
    },
    bestFor: "Living room verandas, garden decks, pool areas, and luxury penthouses",
    guideSlug: "modern-sliding-glass-doors-guide",
  },
];

// Query helper functions
export function getAllProducts(): ProductItem[] {
  return productsData;
}

export function getWindowsProducts(subCategory?: string): ProductItem[] {
  const windows = productsData.filter((p) => p.category === "windows");
  if (!subCategory || subCategory === "all") {
    return windows;
  }
  const query = subCategory.toLowerCase();
  return windows.filter(
    (p) =>
      p.subCategory.toLowerCase() === query ||
      p.material?.toLowerCase() === query ||
      p.windowType?.toLowerCase() === query ||
      p.title.toLowerCase().includes(query)
  );
}

export function getDoorsProducts(subCategory?: string): ProductItem[] {
  const doors = productsData.filter((p) => p.category === "doors");
  if (!subCategory || subCategory === "all") {
    return doors;
  }
  const query = subCategory.toLowerCase();
  return doors.filter(
    (p) =>
      p.subCategory.toLowerCase() === query ||
      p.doorType?.toLowerCase() === query ||
      p.material?.toLowerCase() === query ||
      p.title.toLowerCase().includes(query)
  );
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return productsData.find((p) => p.slug === slug);
}
