export type ProductCategory = "windows" | "doors";

export type ProductSubCategory =
  | "aluminium"
  | "upvc"
  | "sliding"
  | "glass"
  | "casement"
  | "pivot"
  | "bifold";

export interface ProductSpecs {
  profileDepth?: string;
  glassOptions?: string;
  soundInsulation?: string;
  thermalPerformance?: string;
  hardware?: string;
  warranty?: string;
  maxDimensions?: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProductCategory;
  subCategory: ProductSubCategory;
  image: string;
  description: string;
  keyFeatures: string[];
  specs: ProductSpecs;
  bestFor: string;
  guideSlug?: string;
}
