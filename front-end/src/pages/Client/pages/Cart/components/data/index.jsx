import { useContext, useEffect } from "react";
import { StateContext } from "../../../../../../contexts/StateContext";
import Item from "./components/Item";
import "./data.css";
function Data({ setTotalArray }) {
  const { cartItems } = useContext(StateContext);

  return (
    <div className="data bg-white">
      <div className="title">
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-bold text-2xl">Shopping Cart</h1>
          <h1 className="font-bold text-xl">{cartItems.length} items</h1>
        </div>
        <hr />
      </div>
      {!cartItems ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="lists mt-3">
          <ul className="list-title  flex justify-between items-center">
            <li className="text-start font-bold">Product Details</li>
            <li className="text-start font-bold">Quantity</li>
            <li className="text-start font-bold">Price</li>
            <li className="text-start font-bold totall">Total</li>
          </ul>

          <ul className="flex column gap-2 mt-2">
            {cartItems.map((item, index) => (
              <Item
                key={index}
                item={item}
                setTotalArray={setTotalArray}
                index={index}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Data;
