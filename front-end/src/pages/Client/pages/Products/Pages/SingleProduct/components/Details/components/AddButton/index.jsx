import { useContext } from "react";
import "./add.css";
import { StateContext } from "../../../../../../../../../../contexts/StateContext";
function AddToCart({ product }) {
  const { setCartItems } = useContext(StateContext);
  return (
    <button
      className="btn-add flex-center w-full bg-primary rounded p-2"
      onClick={() => setCartItems((prev) => [...prev, product])}
    >
      <span className="text-white ">Add to cart</span>
    </button>
  );
}

export default AddToCart;
