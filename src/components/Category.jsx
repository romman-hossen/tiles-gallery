
// import { GetAllProducts } from "@/lib/products";
import { GetAllProducts } from "@/lib/products";
import { Button, SearchField } from "@heroui/react";
import Link from "next/link";

const Category = async () => {
  // console.log(tiles)
  // const tilesData = fetch("https://tiles-server-qqhd.onrender.com/tiles").then(res => res.json());
  // const tiles = tilesData ? tilesData : [];
    const tiles = await GetAllProducts();
    // const handleSearchChange = (e) => {
    //   const searchValue = e.target.value.toLowerCase();
    //   const filteredTiles = tiles.filter(tile => tile?.category?.toLowerCase().includes(searchValue));
    // }
  return (
    <div className="max-w-7xl mx-auto p-10 flex flex-col justify-center items-center space-y-4">
      <h2 className="">Explore tiles in our collection</h2>
      <div className="">
        <SearchField name="search">
          <SearchField.Group  className={"bg-[#30302E] border border-gray-600 rounded-lg px-4 py-2 flex items-center gap-2 "}>
            <SearchField.SearchIcon className="text-primary"/>
            <SearchField.Input  className="w-full text-white" placeholder="Search your tiles..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>
      <div className="space-x-3 text-center  flex flex-wrap
      items-center md:block gap-3  justify-center">
        {
          tiles.map(tile => {
            return(
                <Link 
                className="md:mb-3 inline-block"
                 key={tile?.id} 
                href={`?category=${tile?.category.toLowerCase()}`}>
                    <Button variant="outline" className={"text-white hover:bg-[#30302E]"}>{tile?.category}</Button>
                </Link>
              
            )
          })
        }

      </div>
    </div>
  );
};

export default Category;
