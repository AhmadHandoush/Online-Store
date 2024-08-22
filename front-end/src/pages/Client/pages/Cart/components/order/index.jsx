import { useContext, useState } from "react";
import "./order.css";
import { StateContext } from "../../../../../../contexts/StateContext";
import { BASE_URL } from "../../../../../../utils/Constants";
import Success from "../../../../../admin/components/Success";
import { useNavigate } from "react-router-dom";
function OrderBox({ totalPrice, setTotalPrice }) {
  const { cartItems, setCartItems, message, setMessage } =
    useContext(StateContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate("");

  const [address, setAddress] = useState("");
  const handleCheckout = () => {
    if (!token) {
      navigate("/auth");
    } else {
      if (!address) {
        alert("Please enter your address before checking out.");
        return;
      }

      const products = cartItems.map((product) => ({
        product_id: product._id,
        quantity: product.quantity || 1,
      }));
      const orderDetails = {
        products,
        total_price: totalPrice,
        client_address: address,
      };
      fetch(`${BASE_URL}/order/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(orderDetails),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Order placed successfully:", data);
          setMessage("Your Order Sent Successfully!");
          setTimeout(() => {
            setMessage("");
          }, 2000);
          setCartItems([]);
          setAddress("");
          setTotalPrice(0);
        })
        .catch((error) => {
          console.error("Error placing order:", error);
          alert("There was an issue placing your order. Please try again.");
        });
    }
  };

  return (
    <div className="bg-gray-300 order">
      {message && <Success message={message} />}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
        <button
          className="checkout flex-center w-full p-2 hover:opacity-50 bg-primary text-white"
          onClick={handleCheckout}
        >
          <span>Checkout</span>
        </button>
      </div>
    </div>
  );
}

export default OrderBox;
