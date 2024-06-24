import { useContext } from "react";
import { StateContext } from "../../../../../contexts/StateContext";

function Delete() {
  const { deleteProduct, setDeleteProduct } = useContext(StateContext);
  return (
    <div className="absolute flex column top-20 p-4 bg-gray-500">
      <p className="text-white mb-2">
        Are you sure ?
        <br />
        you want to delete the product?
      </p>
      <div className="flex gap-4">
        <button
          className="bg-gray-300 font-bold px-2"
          onClick={() => setDeleteProduct(false)}
        >
          No
        </button>
        <button className="bg-red-500 font-bold px-2">Yes</button>
      </div>
    </div>
  );
}

export default Delete;
