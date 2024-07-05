import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { StateContext } from "../../../../../contexts/StateContext";
import { BASE_URL } from "../../../../../utils/Constants";
import { ProductsContext } from "../../../../../contexts/ProductsContext";

function UpdateProduct() {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelecteCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: 0,
    brand: 0,
    price: 0,
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setMessage, setupdateProduct, setOverlay } = useContext(StateContext);
  const { setBrandsData, setCategoriesData } = useContext(ProductsContext);
  const fetchCategories = async () => {
    try {
      setLoading(true);
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
      setCategoriesData(data.categories);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchBrands = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/brand`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setBrands(data.brands);
      setBrandsData(data.brands);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBrands();
    fetchCategories();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/product`, {
        method: "POST",
        body: { formData },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setMessage(data.message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };
  const close = () => {
    setupdateProduct(false);
    setOverlay(false);
  };
  const inputStyle = {
    borderBottom: "2px solid #155e75 ",
    backgroundColor: "rgba(240,240,240)",
    caretColor: "#155e75",
    height: "40px",
  };
  return (
    <div
      className="flex gap-3  bg-white  column p-3 rounded relative"
      style={{
        position: "fixed",
        zIndex: "1000",
        height: "450px",
        width: "30%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <span
        className="absolute flex-center p-2 rounded-full flex-center bg-primary text-white cursor-pointer w-8 h-8 font-bold"
        style={{ top: "-10px", right: "-10px" }}
        onClick={() => close()}
      >
        X
      </span>
      <h2 className="font-bold text-center">Update Product Details</h2>

      <form
        onSubmit={handleSubmit}
        className="flex column gap-2 flex-1 h-full justify-between"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          value={formData.name}
          onChange={handleChange}
          className=" p-2 input"
          style={inputStyle}
        />
        <select
          value={formData.brand}
          onChange={handleChange}
          name="brand"
          style={inputStyle}
          className="input"
        >
          {brands.map((brand) => (
            <option key={brand.name} value={brand._id}>
              {brand.name}
            </option>
          ))}
        </select>
        <select
          value={formData.category}
          onChange={handleChange}
          name="category"
          style={inputStyle}
          className="input"
        >
          {categories.map((category) => (
            <option key={category._name} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          style={inputStyle}
          className="input"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={inputStyle}
          className="input"
        />
        <input
          type="submit"
          value="Update"
          className="bg-primary flex-center font bold text-white py-2 hover:opacity-50 cursor-pointer"
        />
        {error && <p className="text-red-800">{error}</p>}
      </form>
    </div>
  );
}

export default UpdateProduct;
