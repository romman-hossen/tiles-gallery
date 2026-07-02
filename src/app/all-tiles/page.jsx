import TilesCard from "@/components/TilesCard";
import { GetAllProducts } from "@/lib/products";

const AllTilesPage =async () => {
    const tiles = await GetAllProducts();
    return (
        <div className="min-h-40 bg-[#30302E] py-8 ">
            <div className="max-w-7xl mx-auto animate__animated animate__fadeInUp">
                <h3 className="text-xl md:text-3xl pb-2 animate__animated animate__fadeInUp">All <span className="text-primary border-b-2 border-primary">Tiles</span></h3>
               <p className="text-gray-400">Showing 8 of 500+ tiles </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-7 ">
                {
                    tiles.map(tile => <TilesCard key={tile?.id} tile={tile} />)
                }

               </div>
            </div>
            
        </div>
    );
};

export default AllTilesPage;