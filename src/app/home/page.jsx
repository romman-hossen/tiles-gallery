import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import TileMarquee from "@/components/TileMarquee";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <TileMarquee />
      <Banner />
      <FeaturedTiles />
    </div>
  );
};

export default HomePage;
