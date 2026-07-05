import { GetAllProducts } from "@/lib/products";

const TilesDetails = async({params}) => {
  const {id} =await params; 
  const data = await GetAllProducts(id) ;
  
  return (
    <div>
      
    </div>
  );
};

export default TilesDetails;