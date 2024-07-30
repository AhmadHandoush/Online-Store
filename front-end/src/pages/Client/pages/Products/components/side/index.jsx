import { useEffect, useState } from "react";
import "./side.css";
import { BASE_URL } from "../../../../../../utils/Constants";
import Loader from "../../../../../../components/Loader";

function Side({ filteredProducts, setFilteredProducts, products }) {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [loadingBrands, setLoadingBrands] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [error, setError] = useState("");

  const fetchBrands = async () => {
    try {
      setLoadingBrands(true);
      const response = await fetch(`${BASE_URL}/brand`);
      if (!response.ok) {
        throw new Error("Failed to fetch brands");
      }
      const data = await response.json();
      setBrands(data.brands);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingBrands(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setLoadingCategories(true);
      const response = await fetch(`${BASE_URL}/category`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data.categories);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingCategories(false);
    }
  };

  useEffect(() => {
    fetchBrands();
    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    setSelectedBrands((prev) =>
      checked ? [...prev, value] : prev.filter((brand) => brand !== value)
    );
  };

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category.name)) &&
        (selectedBrands.length === 0 ||
          selectedBrands.includes(product.brand.name))
    );
    setFilteredProducts(filtered);
  }, [selectedCategories, selectedBrands, products, setFilteredProducts]);

  return (
    <div className="side p-4 hidden md:block">
      {error && <div className="error text-red-500">{error}</div>}
      <div className="categories mb-5">
        <h1 className="text-black font-bold mb-2">Categories</h1>
        {!loadingCategories ? (
          <ul className="flex column gap-3">
            {categories.map((category, index) => (
              <li key={index}>
                <label className="flex items-center gap-2 text-black">
                  <input
                    type="checkbox"
                    value={category.name}
                    onChange={handleCategoryChange}
                  />
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
      <div className="brands mb-5">
        <h1 className="text-black font-bold mb-2">Brands</h1>
        {!loadingBrands ? (
          <ul className="flex column gap-3">
            {brands.map((brand, index) => (
              <li key={index}>
                <label className="flex items-center gap-2 text-black">
                  <input
                    type="checkbox"
                    value={brand.name}
                    onChange={handleBrandChange}
                  />
                  {brand.name}
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
      <div className="gender mb-5">
        <h1 className="text-black font-bold mb-2">Gender</h1>
        <ul className="flex column gap-3">
          <li>
            <label className="flex items-center gap-2 text-black">
              <input type="checkbox" value="male" />
              Male
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2 text-black">
              <input type="checkbox" value="female" />
              Female
            </label>
          </li>
        </ul>
      </div>
      <div className="colors mb-5">
        <h1 className="text-black font-bold mb-2">Colors</h1>
        <ul className="flex column gap-3">
          <li>
            <label className="flex items-center gap-2 text-black">
              <input type="checkbox" value="green" />
              Green
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2 text-black">
              <input type="checkbox" value="blue" />
              Blue
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2 text-black">
              <input type="checkbox" value="white" />
              White
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Side;
