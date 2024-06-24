import { useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLaoding] = useState(false);
  const [error, setError] = useState("");
  useState(() => {
    const fetchProducts = async () => {
      try {
        setLaoding(true);
        const response = await fetch("http://localhost:3001/product/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
        setLaoding(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setLaoding(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
