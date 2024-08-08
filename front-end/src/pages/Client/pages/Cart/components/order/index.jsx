import { useContext } from "react";
import "./order.css";
import { StateContext } from "../../../../../../contexts/StateContext";
function OrderBox({ totalPrice }) {
  const { cartItems } = useContext(StateContext);
  return (
    <div className="bg-gray-300 order">
      <div className="all p-3">
        <h1 className="font-bold mb-3">Order Summary</h1>
        <hr className="bg-gray-300 h-1" />
        <div className="info flex column justify-between gap-5  py-4">
          <div className="address flex column gap-1 ">
            <label className="font-bold"> Your Address</label>
            <input
              type="text"
              placeholder="Enter your complete address"
              className="p-2"
            />
          </div>
          <div className="items-number flex justify-between items-center">
            <h2>Items</h2>
            <p className="font-bold number">{cartItems.length}</p>
          </div>
          <hr className=" bg-gray-500 " />
          <div className="total-price flex justify-between items-center">
            <small className="total-title font-bold ">Total Price</small>
            <p className="font-bold number">${totalPrice}</p>
          </div>
        </div>
        <button className="checkout flex-center w-full p-2 hover:opacity-50 bg-primary text-white">
          <span>Checkout</span>
        </button>
      </div>
    </div>
  );
}

export default OrderBox;
