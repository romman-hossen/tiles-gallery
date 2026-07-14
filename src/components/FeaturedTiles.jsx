import { GetAllProducts } from "@/lib/products";
import TilesCard from "./TilesCard";

const FeaturedTiles =async () => {
    const tiles = await GetAllProducts();
    const bestTiles = tiles?.sort((a,b) => b.rating - a.rating).slice(0, 4) || [];
    console.log(bestTiles);
    return (
        <div className="min-h-40 bg-[#30302E] py-8 px-3 md:px-0 lg:px-1">
            <div className="max-w-7xl mx-auto animate__animated animate__fadeInUp">
                <h3 className="text-xl md:text-3xl pb-2 animate__animated animate__fadeInUp">Featured <span className="text-primary border-b-2 border-primary">Tiles</span></h3>
               <p className="text-gray-400">Handpicked top 4 tiles from our collection</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-7 ">
                {
                    bestTiles.map(tile => <TilesCard key={tile?.id} tile={tile} />)
                }

               </div>
            </div>
            
        </div>
    );
};

export default FeaturedTiles;