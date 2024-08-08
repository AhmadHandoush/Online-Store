import { useContext, useState } from "react";
import "./add.css";
import { StateContext } from "../../../../../../../../../../contexts/StateContext";
function AddToCart({ product, added }) {
  const { setCartItems } = useContext(StateContext);
  const [add, setAdd] = useState(false);

  return (
    <button
      className={`btn-add flex-center w-full ${
        add ? "bg-gray-500" : "bg-primary"
      } rounded p-2 ${add ? "disabled" : ""}  `}
      onClick={() => {
        setCartItems((prev) => [...prev, product]);
        added();
        setAdd(true);
      }}
      disabled={add}
    >
      <span className="text-white ">{add ? "Added" : "Add to Cart"}</span>
    </button>
  );
}

export default AddToCart;
