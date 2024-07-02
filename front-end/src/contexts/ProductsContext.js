import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../utils/Constants";

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLaoding] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const [product, setProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const filtered = products.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const fetchCategories = async () => {
    try {
      setLaoding(true);
      const response = await fetch(`${BASE_URL}/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data.categories);
      setLaoding(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLaoding(false);
    }
  };
  const fetchProducts = async () => {
    try {
      setLaoding(true);
      const response = await fetch(`${BASE_URL}/product`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLaoding(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLaoding(false);
    }
  };

  const fetchOrders = async () => {
    try {
      setLaoding(true);
      const response = await fetch(`${BASE_URL}/order`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }
      const data = await response.json();

      setOrders(data.orders);
      setLaoding(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLaoding(false);
    }
  };
  useEffect(() => {
    if (token) {
      fetchProducts();
      fetchCategories();
      fetchOrders();
    }
  }, [token]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        brands,
        setBrands,
        categories,
        setCategories,
        orders,
        setOrders,
        product,
        setProduct,
        token,
        loading,
        setLaoding,
        error,
        setError,
        filteredProducts,
        setFilteredProducts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
