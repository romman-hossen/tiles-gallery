// app/components/Banner.jsx

import { playfair } from "@/app/layout";
import { Button } from "@heroui/react";
import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";

export default function Banner() {
  return (
    <>
      <section className="min-h-125 bg-linear-to-r from-blue-950/50 to-cyan-950 flex justify-center items-center p-10 ">
        <div className="text-center space-y-10 animate__animated animate__fadeInUp">
          <div className="space-y-5">
            <h3 className={`${playfair.className} text-primary text-xl md:text-2xl`}>PREMIUM TILE COLLECTION</h3>
            <h2 className="text-5xl leading-15 animate__animated animate__fadeInDown">Discover Your <br />Perfect  <span className="text-primary">Aesthetic Tiles</span></h2>
            <p className="text-gray-400 ">
              Explore 500+ handpicked ceramic, marble, and mosaic tiles for
              every style and space.
            </p>
          </div>
          <Link href={'/all-tiles'}>
            <Button variant="outline" className={"hover:bg-bg hover:text-primary text-white rounded-md animate__animated animate__fadeInLeft"}>Browse Now <BiRightArrow /></Button>
          </Link>
        </div>
      </section>

      {/* Main Banner */}
    </>
  );
}

// const tileImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=50",
//   "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=120&q=50",
//   "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=120&q=50",
//   "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=120&q=50",
//   "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=120&q=50",
//   "https://images.unsplash.com/photo-1558905586-b023e5d8d3b0?w=120&q=50",
// ];
