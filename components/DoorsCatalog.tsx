"use client";

import { useState, useMemo, Suspense } from "react";
import { ProductItem } from "@/types/product";
import ProductCard from "@/components/ProductCard";

interface DoorsCatalogProps {
  products: ProductItem[];
}

const DOOR_TYPES = [
  { id: "all", label: "All Doors" },
  { id: "casement", label: "Casement Doors" },
  { id: "sliding", label: "Sliding Door" },
  { id: "slide-and-fold", label: "Slide & Fold Doors" },
] as const;

type SortOption = "featured" | "name-asc" | "name-desc";

function DoorsCatalogContent({ products }: DoorsCatalogProps) {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let list = products.filter((product) => {
      if (selectedType === "all") return true;
      const typeKey = selectedType.toLowerCase();
      return (
        product.doorType?.toLowerCase() === typeKey ||
        product.subCategory?.toLowerCase() === typeKey ||
        product.title.toLowerCase().includes(typeKey.replace("-", " "))
      );
    });

    if (sortBy === "name-asc") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-desc") {
      list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    }

    return list;
  }, [products, selectedType, sortBy]);

  // Compute counts per type
  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    DOOR_TYPES.forEach((t) => {
      if (t.id === "all") return;
      counts[t.id] = products.filter(
        (p) =>
          p.doorType?.toLowerCase() === t.id.toLowerCase() ||
          p.subCategory?.toLowerCase() === t.id.toLowerCase() ||
          p.title.toLowerCase().includes(t.id.toLowerCase().replace("-", " "))
      ).length;
    });
    return counts;
  }, [products]);

  return (
    <div className="space-y-8">
      {/* ========================================================================= */}
      {/* SIMPLE FILTER & SORT BAR                                                  */}
      {/* ========================================================================= */}
      <section
        aria-label="Filter and sort doors"
        className="rounded-2xl border border-[#E5E7EB] bg-white p-4 sm:p-5 shadow-sm"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Door Type Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {DOOR_TYPES.map((type) => {
              const isActive = selectedType === type.id;
              const count = typeCounts[type.id];

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] text-white shadow-sm shadow-[#0F8F7E]/25"
                      : "border border-[#E5E7EB] bg-[#F9FAFB] text-[#4B5563] hover:border-[#0F8F7E]/40 hover:bg-[#E3F4F1]/60 hover:text-[#0F8F7E]"
                  }`}
                >
                  <span>{type.label}</span>
                  {count !== undefined && (
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-gray-200/80 text-[#6B7280]"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#F0F2F4]">
            <label
              htmlFor="door-sort-select"
              className="text-xs font-medium text-[#6B7280] shrink-0"
            >
              Sort by:
            </label>
            <div className="relative">
              <select
                id="door-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none rounded-xl border border-[#D1D5DB] bg-[#F9FAFB] py-2 pl-3 pr-8 text-xs font-semibold text-[#1E2328] shadow-sm transition-all focus:border-[#0F8F7E] focus:outline-none focus:ring-2 focus:ring-[#0F8F7E]/20"
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-[#6B7280]">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 8 4 4 4-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Status Line */}
        <div className="mt-3.5 flex items-center justify-between border-t border-[#F0F2F4] pt-3 text-xs text-[#6B7280]">
          <span>
            Showing <strong className="text-[#1E2328]">{filteredProducts.length}</strong> of{" "}
            <strong className="text-[#1E2328]">{products.length}</strong> door styles
          </span>
          {selectedType !== "all" && (
            <button
              type="button"
              onClick={() => setSelectedType("all")}
              className="font-semibold text-[#0F8F7E] hover:underline"
            >
              Clear Filter
            </button>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PRODUCTS DISPLAY GRID                                                     */}
      {/* ========================================================================= */}
      {filteredProducts.length > 0 ? (
        <section aria-labelledby="filtered-doors-heading">
          <h2 id="filtered-doors-heading" className="sr-only">
            Filtered Door Results
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={idx < 3}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#D1D5DB] bg-white p-12 text-center">
          <p className="text-sm text-[#6B7280]">
            No doors found for this category.
          </p>
          <button
            type="button"
            onClick={() => setSelectedType("all")}
            className="mt-4 rounded-full bg-gradient-to-r from-[#0F8F7E] to-[#0D7A6B] px-5 py-2 text-xs font-semibold text-white shadow-sm"
          >
            Show All Doors
          </button>
        </div>
      )}
    </div>
  );
}

export default function DoorsCatalog({ products }: DoorsCatalogProps) {
  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
          <div className="aspect-[16/10] rounded-2xl bg-gray-200" />
          <div className="aspect-[16/10] rounded-2xl bg-gray-200" />
          <div className="aspect-[16/10] rounded-2xl bg-gray-200" />
        </div>
      }
    >
      <DoorsCatalogContent products={products} />
    </Suspense>
  );
}
