// app/components/Banner.jsx

import Link from "next/link";

export default function Banner() {
  return (
    <>
      {/* Top Strip */}
      <div className="bg-[#e8c547] text-center py-2 text-xs font-medium text-[#0f0e17] tracking-widest">
        ✦ NEW COLLECTION 2025 — PREMIUM TILES NOW IN STOCK ✦
      </div>

      {/* Main Banner */}
      <section className="relative min-h-[500px] bg-[#0f0e17] overflow-hidden flex items-center">

        {/* Background tile grid */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-15">
          {Array.from({length: 32}).map((_, i) => (
            <div key={i} className="border border-yellow-600/20 overflow-hidden">
              <img
                src={tileImages[i % tileImages.length]}
                alt=""
                className="w-full h-full object-cover saturate-50 brightness-50"
              />
            </div>
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0e17]/95 via-[#0f0e17]/75 to-[#0f0e17]/90" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-10 py-16 flex items-center justify-between gap-8">

          {/* Left: Text */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-[#e8c547] text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8c547] animate-pulse" />
              Premium Tile Collection
            </span>

            <h1 className="text-5xl font-medium text-white leading-tight mb-4">
              Discover Your<br/>
              Perfect{" "}
              <span className="text-[#e8c547]">Aesthetic</span><br/>
              <span className="text-transparent" style={{WebkitTextStroke:"1.5px #e8c547"}}>
                In Every Tile
              </span>
            </h1>

            <p className="text-white/50 text-sm leading-relaxed mb-7 max-w-md">
              Handpicked ceramic, marble, mosaic & stone tiles from artisan
              creators worldwide. Transform any space into a masterpiece.
            </p>

            <div className="flex gap-3">
              <Link href="/all-tiles"
                className="bg-[#e8c547] text-[#0f0e17] px-7 py-3 rounded-lg text-sm font-medium flex items-center gap-2">
                Browse Gallery →
              </Link>
              <button className="border border-yellow-400/40 text-[#e8c547] px-6 py-3 rounded-lg text-sm flex items-center gap-2">
                Watch Video ▷
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-9">
              {[["500+","Tile Designs"],["12","Categories"],["4.9★","Avg Rating"]].map(([n,l])=>(
                <div key={l}>
                  <div className="text-2xl font-medium text-[#e8c547]">{n}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tile cards */}
          <div className="w-64 grid grid-cols-2 gap-2 flex-shrink-0">
            <div className="col-span-1 row-span-2 rounded-xl overflow-hidden border border-yellow-400/20 relative h-56">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80"
                className="w-full h-full object-cover" alt="Ceramic Blue" />
              <div className="absolute bottom-0 inset-x-0 bg-[#0f0e17]/75 px-2 py-1 text-[10px] text-white/80">
                Ceramic Blue <span className="text-[#e8c547]">$45</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-yellow-400/20 relative h-[108px]">
              <img src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=300&q=80"
                className="w-full h-full object-cover" alt="Terracotta" />
              <div className="absolute bottom-0 inset-x-0 bg-[#0f0e17]/75 px-2 py-1 text-[10px] text-white/80">
                Terracotta <span className="text-[#e8c547]">$28</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-yellow-400/20 relative h-[108px]">
              <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=300&q=80"
                className="w-full h-full object-cover" alt="Moroccan" />
              <div className="absolute bottom-0 inset-x-0 bg-[#0f0e17]/75 px-2 py-1 text-[10px] text-white/80">
                Moroccan <span className="text-[#e8c547]">$62</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gold bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e8c547] opacity-60" />
      </section>
    </>
  );
}

const tileImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=50",
  "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=120&q=50",
  "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=120&q=50",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=120&q=50",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=120&q=50",
  "https://images.unsplash.com/photo-1558905586-b023e5d8d3b0?w=120&q=50",
];