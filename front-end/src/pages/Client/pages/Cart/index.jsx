import { useContext } from "react";
import { StateContext } from "../../../../contexts/StateContext";
import "./cart.css";
import Data from "./components/data";
import OrderBox from "./components/order";

function Cart() {
  const { cartItems } = useContext(StateContext);

  return (
    <div className=" w-full bg-gray-100 h-screen pt-5">
      {/* {cartItems.length === 0 ? (
        <p>Your cart is Empty</p>
      ) : (
        <ul>
          <li>{cartItems.length}</li>
        </ul>
      )} */}
      <div className="cart flex">
        <Data />
        <OrderBox />
      </div>
    </div>
  );
}

export default Cart;
