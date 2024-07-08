import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../../../../../utils/Constants";
import { AuthContext } from "../../../../../../contexts/AuthContext";
import { ProductsContext } from "../../../../../../contexts/ProductsContext";
import { StateContext } from "../../../../../../contexts/StateContext";

function AddProduct() {
  const { token } = useContext(AuthContext);
  const { setMessage, setupdateProduct, setOverlay } = useContext(StateContext);
  const { setBrandsData, setCategoriesData } = useContext(ProductsContext);

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    quantity: "",
    brand: "",
    gender: "",
    color: "",
    images: [],
  });
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "black",
    "white",
  ];
  const genders = ["Male", "Female"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [brandsResponse, categoriesResponse] = await Promise.all([
          fetch(`${BASE_URL}/brand`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${BASE_URL}/category`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!brandsResponse.ok || !categoriesResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const brandsData = await brandsResponse.json();
        const categoriesData = await categoriesResponse.json();

        setBrands(brandsData.brands);
        setCategories(categoriesData.categories);
        setBrandsData(brandsData.brands);
        setCategoriesData(categoriesData.categories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, setBrandsData, setCategoriesData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: files }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.color) newErrors.color = "Color is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.price || isNaN(formData.price) || formData.price <= 0)
      newErrors.price = "Valid price is required";
    if (
      !formData.quantity ||
      isNaN(formData.quantity) ||
      formData.quantity <= 0
    )
      newErrors.quantity = "Quantity must be at least 1";
    if (!formData.brand) newErrors.brand = "Brand is required";
    if (formData.images.length < 3)
      newErrors.images = "Three images are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((image) => data.append("images", image));
      } else {
        data.append(key, value);
      }
    });

    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/product/create`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const responseData = await response.json();
      setupdateProduct(false);
      setOverlay(false);
      setMessage(responseData.message);
      setTimeout(() => setMessage(""), 3000);
      setFormData({
        name: "",
        category: "",
        description: "",
        price: "",
        quantity: "",
        brand: "",
        gender: "",
        color: "",
        images: [],
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    borderBottom: "2px solid #155e75",
    backgroundColor: "rgba(240,240,240)",
    caretColor: "#155e75",
    height: "40px",
    flex: "1",
  };

  return (
    <div className="flex-1 flex-center">
      <div
        className="flex flex-col w-full p-4"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <h2 className="font-bold text-3xl text-primary text-center mb-4">
          Add Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              style={inputStyle}
            />
            {errors.name && <p className="text-red-800">!{errors.name}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="brand">Brand</label>
            <select
              value={formData.brand}
              onChange={handleChange}
              name="brand"
              id="brand"
              className="p-2 border border-gray-300 rounded"
              style={inputStyle}
            >
              <option value="">Select a brand</option>
              {brands.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))}
            </select>
            {errors.brand && <p className="text-red-800">!{errors.brand}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="category">Category</label>
            <select
              value={formData.category}
              onChange={handleChange}
              name="category"
              id="category"
              className="p-2 border border-gray-300 rounded"
              style={inputStyle}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-800">!{errors.category}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              style={inputStyle}
              placeholder="Enter product price"
            />
            {errors.price && <p className="text-red-800">!{errors.price}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              style={inputStyle}
              placeholder="Enter product quantity"
            />
            {errors.quantity && (
              <p className="text-red-800">!{errors.quantity}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="gender">Gender</label>
            <select
              value={formData.gender}
              onChange={handleChange}
              name="gender"
              id="gender"
              className="p-2 border border-gray-300 rounded"
              style={inputStyle}
            >
              <option value="">Select gender</option>
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
            {errors.gender && <p className="text-red-800">!{errors.gender}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="color">Color</label>
            <select
              value={formData.color}
              onChange={handleChange}
              name="color"
              id="color"
              className="p-2 border border-gray-300 rounded"
              style={inputStyle}
            >
              <option value="">Select a color</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
            {errors.color && <p className="text-red-800">!{errors.color}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              style={inputStyle}
              placeholder="Enter product description"
            />
            {errors.description && (
              <p className="text-red-800">!{errors.description}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="images">Images</label>
            <input
              type="file"
              name="images"
              id="images"
              multiple
              onChange={handleFileChange}
              className="p-2 border border-gray-300 rounded"
            />
            {errors.images && <p className="text-red-800">!{errors.images}</p>}
          </div>

          <button
            type="submit"
            className="col-span-1 sm:col-span-2 md:col-span-3 bg-primary text-white font-bold py-2 rounded hover:opacity-50 cursor-pointer"
          >
            {loading ? "Adding..." : "Add"}
          </button>
          {error && <p className="text-red-800 col-span-full">!{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
