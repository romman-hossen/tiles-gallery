export const GetAllProducts = async () => {
  try {
    const response = await fetch("https://tiles-server-qqhd.onrender.com/tiles");
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
export const GetProductById = async (id) => {
  try {
    const response = await fetch(`https://tiles-server-qqhd.onrender.com/tiles/${id}`); 
    if (!response.ok) {
      throw new Error("Failed to fetch product by ID");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
}  





