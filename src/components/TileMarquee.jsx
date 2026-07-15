import { GetAllProducts } from "@/lib/products";
import MarqueeBar from "./MarqueeBar";


const TileMarquee =async () => {
    const tiles = await GetAllProducts();

  const marqueeItems = [
    ...tiles.map((tile) => `New Arrival: ${tile.title}`),
    "Weekly Feature: Modern Geometric Patterns",
    "Free Shipping on Orders Over $200",
    "Join the TileVerse Community",
    "Trending: Moroccan Zellij Collection",
  ];

  return <MarqueeBar marqueeItems={marqueeItems} />
    // return (
    //     <div className="bg-primary text-center py-2 text-xs font-medium text-[#0f0e17] tracking-widest ">
    //          <Marquee><span>{marqueeItems}</span></Marquee>
    //  </div>
    // );
};

export default TileMarquee;