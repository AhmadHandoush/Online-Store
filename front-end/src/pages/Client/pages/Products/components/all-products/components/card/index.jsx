import { Link } from "react-router-dom";
import "./card.css";
import { BASE_URL } from "../../../../../../../../utils/Constants";
function Card({ product }) {
  const { _id, name, description, images, price } = product;
  return (
    <Link to={`/home/${_id}`} className="w-72 h-71">
      <div className="product-card">
        <img
          src={`${BASE_URL}/uploads/${images[0]}`}
          alt={name}
          className="product-image"
        />
        <div className="product-details">
          <div className="flex justify-between ">
            <h2 className="product-name ">{name}</h2>
            <h3 className="product-price text-primary font-bold">
              ${price.toFixed(2)}
            </h3>
          </div>
          <p className="product-description">{description.slice(0, 20)}...</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
