import { Link } from "react-router-dom";
import "./card.css";
function Card({ product }) {
  const { name, description, image, price } = product;
  return (
    <Link>
      <div className="product-card">
        <img src={image} alt={name} className="product-image" />
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
