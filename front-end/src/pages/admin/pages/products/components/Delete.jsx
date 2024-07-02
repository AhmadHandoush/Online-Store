import { useContext, useState } from "react";
import { StateContext } from "../../../../../contexts/StateContext";
import { BASE_URL } from "../../../../../utils/Constants";
import { ProductsContext } from "../../../../../contexts/ProductsContext";

function Delete({ product }) {
  const [error, setError] = useState("");
  const { setDeleteProduct, setMessage } = useContext(StateContext);
  const { products, setProducts } = useContext(ProductsContext);
  const token = localStorage.getItem("token");
  const deleteProduct = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/product/delete/${product._id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      const updatedProducts = products.filter(
        (Item) => Item._id !== product._id
      );
      setProducts(updatedProducts);
      setDeleteProduct(false);
      setMessage(data.message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="absolute top-10 flex column  p-4 bg-gray-500 inline-block">
      <p className="text-white mb-2">
        Are you sure ?
        <br />
        you want to delete the product?
      </p>
      <div className="flex gap-4">
        <button
          className="bg-gray-300 font-bold px-2 hover:opacity-50 transition-opacity duration-300"
          onClick={() => setDeleteProduct(false)}
        >
          No
        </button>
        <button
          className="bg-red-500 font-bold px-2 hover:opacity-50 transition-opacity duration-300"
          onClick={() => deleteProduct()}
        >
          Yes
        </button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Delete;
