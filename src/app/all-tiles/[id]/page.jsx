import { GetProductById } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

const TilesDetails = async ({ params }) => {
  const { id } = await params;
  const tile = await GetProductById(id);
  if (!tile) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-4">
        <p className="text-5xl">🪨</p>
        <h2 className="text-2xl font-medium text-white">Tile not found</h2>
        <p className="text-gray-400 text-sm">This tile doesn&apos;t exist.</p>
        <Link
          href="/all-tiles"
          className="mt-2 bg-[#e8c547] text-[#0f0e17] px-6 py-2.5 rounded-lg text-sm font-semibold"
        >
          ← Back to All Tiles
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* ── MAIN LAYOUT: photo left, details right ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — sticky image column */}
          <div className="lg:sticky lg:top-6 flex flex-col gap-4">
              <div className="bg-[#1a1a2e] border-b border-[#e8c547]/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm flex-wrap">
          <Link href="/" className="text-gray-400 hover:text-[#e8c547] transition-colors">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/all-tiles" className="text-gray-400 hover:text-[#e8c547] transition-colors">
            All Tiles
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-[#e8c547] truncate max-w-[180px]">{tile.title}</span>
        </div>
      </div>

            {/* Main image — tall enough on desktop */}
            <div className="relative w-full h-[320px] md:h-[460px] rounded-2xl overflow-hidden border border-[#e8c547]/20 bg-[#1a1a2e]">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay badges */}
              <div className="absolute top-4 left-4">
                {tile.inStock ? (
                  <span className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    ✓ In Stock
                  </span>
                ) : (
                  <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    Out of Stock
                  </span>
                )}
              </div>

              <div className="absolute top-4 right-4 bg-[#e8c547] text-[#0f0e17] text-xs font-bold px-3 py-1 rounded-full">
                ⭐ {tile.rating} ({tile.reviewCount})
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {[tile.image, tile.image, tile.image].map((img, i) => (
                <div
                  key={i}
                  className={`relative h-20 w-24 rounded-xl overflow-hidden border cursor-pointer transition-all ${
                    i === 0
                      ? "border-[#e8c547]"
                      : "border-white/10 hover:border-[#e8c547]/50"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — scrollable details column */}
          <div className="flex flex-col gap-6">

            {/* Category + Title + Creator */}
            <div>
              <span className="inline-block bg-[#e8c547]/10 text-[#e8c547] border border-[#e8c547]/25 text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                {tile.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-medium text-white leading-tight">
                {tile.title}
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                by{" "}
                <span className="text-[#e8c547] font-medium">{tile.creator}</span>
              </p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-2">
              <span className="text-4xl font-semibold text-[#e8c547]">
                ${tile.price}
              </span>
              <span className="text-gray-500 text-sm mb-1">{tile.currency} / sq ft</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-[#e8c547]/40 pl-4">
              {tile.description}
            </p>

            {/* Specs Table */}
            <div className="bg-[#1a1a2e] rounded-xl border border-white/8 overflow-hidden">
              <div className="px-4 py-3 border-b border-white/8">
                <h3 className="text-sm font-medium text-white">Specifications</h3>
              </div>
              <div className="divide-y divide-white/5">
                {[
                  ["Material", tile.material],
                  ["Dimensions", tile.dimensions],
                  ["Finish", tile.finish],
                  ["Category", tile.category],
                  ["SKU", tile.id],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center px-4 py-3">
                    <span className="text-gray-500 text-sm w-32 shrink-0">{label}</span>
                    <span className="text-white text-sm font-medium capitalize">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {tile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#e8c547]/10 text-[#e8c547] border border-[#e8c547]/20 text-xs px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-2">
              <button
                disabled={!tile.inStock}
                className="flex-1 bg-[#e8c547] text-[#0f0e17] font-semibold py-3 rounded-xl hover:bg-yellow-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {tile.inStock ? "Add to Wishlist" : "Out of Stock"}
              </button>
              <Link
                href="/all-tiles"
                className="px-5 py-3 rounded-xl border border-white/15 text-gray-300 hover:border-[#e8c547]/40 hover:text-[#e8c547] transition-colors text-sm flex items-center"
              >
                ← Browse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilesDetails;