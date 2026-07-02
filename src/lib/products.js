export const GetAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:5001/tiles");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }   
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }  
}   





