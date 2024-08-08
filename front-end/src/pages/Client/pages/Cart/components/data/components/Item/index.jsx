import { useEffect, useState } from "react";
import "./Item.css";
import { BASE_URL } from "../../../../../../../../utils/Constants";

function Item({ item, setTotalArray, index }) {
  const { name, category, brand, price } = { ...item };
  const [quantity, setQuantity] = useState(1);
  let total = price * quantity;
  useEffect(() => {
    setTotalArray((prev) => {
      const newArray = [...prev];
      newArray[index] = total;
      return newArray;
    });
  }, [total, setTotalArray]);

  return (
    <ul className=" item pt-2 flex justify-between items-center">
      <li className="flex gap-2">
        <div className="image">
          <img
            src={`${BASE_URL}/uploads/${item.images[0]}`}
            alt={`${item.name}`}
            className="s-image"
          />
        </div>
        <div className="flex column information justify-between ">
          <h5 className="text-black">{name}</h5>
          <h5 className="text-green-500">{category.name}</h5>
          <h5 className="text-red-500">{brand.name}</h5>
        </div>
      </li>
      <li className="flex gap-1 items-center quantity">
        <button
          className="flex-center"
          onClick={() => {
            setQuantity((prev) => prev - 1);
          }}
        >
          <span className="text-black text-2xl">-</span>
        </button>
        <span className="bg-gray-100 flex-center text-black font-bold px-2 py-1 rounded">
          {quantity}
        </span>
        <button
          className="flex-center"
          onClick={() => {
            setQuantity((prev) => prev + 1);
          }}
        >
          <span className="text-black text-2xl">+</span>
        </button>
      </li>
      <li className="font-bold text-black price">${price}</li>
      <li className="font-bold text-black total">${total}</li>
    </ul>
  );
}

export default Item;
