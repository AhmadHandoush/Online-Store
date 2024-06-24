import { useContext } from "react";
import { ProductsContext } from "../../../../../contexts/ProductsContext";
import { IoEye } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { StateContext } from "../../../../../contexts/StateContext";
import Delete from "./Delete";

function Table() {
  const { products } = useContext(ProductsContext);
  const { deleteProduct, setDeleteProduct } = useContext(StateContext);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr className="bg-primary">
            <th className="px-6 py-3 text-left text-xs  font-bold  uppercase tracking-wider text-white">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs  font-bold  uppercase tracking-wider  text-white">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider  text-white">
              Brand
            </th>
            <th className="px-6 py-3 text-left text-xs  font-bold  uppercase tracking-wider text-white">
              Price
            </th>

            <th className="px-6 py-3 text-left text-xs   font-bold uppercase tracking-wider text-white">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs   font-bold uppercase tracking-wider text-white"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr className="">
              <td className="px-6 py-4 whitespace-nowrap   bg-gray-200 font-bold">
                {product.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  bg-gray-200 font-bold">
                {product.category.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-gray-200 font-bold">
                {product.brand.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-gray-200 font-bold">
                {product.price}$
              </td>
              <td className="px-6 py-4 whitespace-nowrap bg-gray-200 ">
                <img
                  src={`http://localhost:3001/uploads/${product.images[0]}`}
                  alt="product"
                  className="w-6  h-6"
                />
              </td>
              <td className="px-2 py-5 bg-gray-200  flex gap-5 justify-center">
                <IoEye className="w-6 h-6 text-green-500" />
                <AiFillEdit className="w-6 h-6 font-bold" />
                <FaTrashAlt
                  className="w-6 h-6  text-red-500 cursor-pointer relative "
                  onClick={() => setDeleteProduct(true)}
                />
              </td>
              {deleteProduct && <Delete />}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
