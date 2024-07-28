import { Link } from "react-router-dom";
import "./card.css";
import { BASE_URL } from "../../../../../../../../utils/Constants";
function Card({ product }) {
  const { name, description, images, price } = product;
  return (
    <Link>
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
          <p className="product-description">{description.slice(0, 30)}...</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
