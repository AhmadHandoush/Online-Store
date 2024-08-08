import { useContext, useEffect, useState } from "react";
import { StateContext } from "../../../../contexts/StateContext";
import "./cart.css";
import Data from "./components/data";
import OrderBox from "./components/order";

function Cart() {
  const [totalArray, setTotalArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = totalArray.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(total);
  }, [totalArray]);

  return (
    <div className=" w-full bg-gray-100 h-screen pt-5">
      <div className="cart flex gap-2">
        <Data setTotalArray={setTotalArray} />
        <OrderBox totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Cart;
