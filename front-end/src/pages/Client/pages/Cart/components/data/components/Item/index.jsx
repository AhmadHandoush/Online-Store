import "./Item.css";

function Item() {
  return (
    <ul className=" item pt-2 flex justify-between items-center">
      <li className="flex gap-2">
        <div className="image">
          <img src="../22.png" alt="22" className="s-image" />
        </div>
        <div className="flex column information justify-between ">
          <h5 className="text-black">Name</h5>
          <h5 className="text-green-500">Category</h5>
          <h5 className="text-red-500">Brand</h5>
        </div>
      </li>
      <li className="flex gap-1 items-center quantity">
        <button className="flex-center">
          <span className="text-black text-2xl">-</span>
        </button>
        <span className="bg-gray-100 flex-center text-black font-bold px-2 py-1 rounded">
          3
        </span>
        <button className="flex-center">
          <span className="text-black text-2xl">+</span>
        </button>
      </li>
      <li className="font-bold text-black price">$20</li>
      <li className="font-bold text-black total">$50</li>
    </ul>
  );
}

export default Item;
