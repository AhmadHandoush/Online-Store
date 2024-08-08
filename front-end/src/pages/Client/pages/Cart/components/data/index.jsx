import Item from "./components/Item";
import "./data.css";
function Data() {
  return (
    <div className="data bg-white">
      <div className="title">
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-bold text-2xl">Shopping Cart</h1>
          <h1 className="font-bold text-xl">3items</h1>
        </div>
        <hr />
      </div>
      <div className="lists mt-3">
        <ul className="list-title  flex justify-between items-center">
          <li className="text-start">Product Details</li>
          <li className="text-start">Quantity</li>
          <li className="text-start">Price</li>
          <li className="text-start totall">Total</li>
        </ul>
        <ul className="flex column gap-2 mt-2">
          <Item />
          <Item />
          <Item />
          <Item />
        </ul>
      </div>
    </div>
  );
}

export default Data;
