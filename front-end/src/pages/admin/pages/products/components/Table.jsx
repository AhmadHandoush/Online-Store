import { useContext, useState } from "react";
import { ProductsContext } from "../../../../../contexts/ProductsContext";
import { IoEye } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { StateContext } from "../../../../../contexts/StateContext";
import Delete from "./Delete";

function Table() {
  const { products, setProduct, filteredProducts } =
    useContext(ProductsContext);

  const {
    deleteProduct,
    setDeleteProduct,
    setViewProduct,
    setOverlay,
    setupdateProduct,
  } = useContext(StateContext);

  const ViewProduct = (product) => {
    setViewProduct(true);
    setOverlay(true);
    setProduct(product);
  };

  const update = (product) => {
    setupdateProduct(true);
    setOverlay(true);
    setProduct(product);
  };

  const [productId, setProductId] = useState(null);

  return (
    <div>
      <table className="table-fixed min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg ">
        <thead className="bg-gray-100">
          <tr className="bg-primary">
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-white">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-white">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-white hidden md:table-cell">
              Brand
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-white hidden md:table-cell">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-white hidden lg:table-cell">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-white"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredProducts.map((product, index) => (
            <tr
              className={`${index % 2 === 0 ? "bg-gray-200" : "bg-gray-50"} ${
                product._id === productId ? "bg-red-300" : ""
              }`}
              key={product._id}
            >
              <td className="px-6 py-4 whitespace-nowrap font-bold">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-bold">
                {/* {product.category.name}
                 */}
                category
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-bold hidden md:table-cell">
                {product.brand.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-bold hidden md:table-cell">
                {product.price}$
              </td>
              <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                <img
                  src={`http://localhost:3001/uploads/${product.images[0]}`}
                  alt={product.name}
                  className="w-6 h-6"
                />
              </td>
              <td className="px-2 py-5 flex gap-5 justify-center">
                <IoEye
                  className="w-6 h-6 text-green-500 cursor-pointer"
                  onClick={() => ViewProduct(product)}
                />
                <AiFillEdit
                  className="w-6 h-6 font-bold cursor-pointer"
                  onClick={() => update(product)}
                />
                <FaTrashAlt
                  className="w-6 h-6 text-red-500 cursor-pointer relative"
                  onClick={() => {
                    setDeleteProduct(true);
                    setProductId(product._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteProduct && (
        <Delete
          product={products.find((p) => p._id === productId)}
          setProductId={setProductId}
          productId={productId}
        />
      )}
    </div>
  );
}

export default Table;
