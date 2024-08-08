import Loader from "../../../../../../../../components/Loader";
import AddToCart from "./components/AddButton";
import "./details.css";
function Details({ product, loading, error }) {
  const { name, price, description, color, gender, brand, category } = {
    ...product,
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="details p-4 ">
      {product ? (
        <div className="flex column gap-4">
          <div className="flex justify-between items-center">
            <h2>Name</h2>
            <h3>{name}</h3>
          </div>
          <div className="flex justify-between">
            <h2>Color</h2>
            <h3>{color}</h3>
          </div>
          <div className="flex justify-between items-center">
            <h2>Gender</h2>
            <h3>{gender}</h3>
          </div>
          <div className="flex justify-between items-center">
            <h2>Brand</h2>
            <h3>{brand.name}</h3>
          </div>
          <div className="flex justify-between items-center">
            <h2>Category</h2>
            <h3>{category.name}</h3>
          </div>
          <div className="flex justify-between  items-center">
            <h2>Price</h2>
            <h1 className="text-primary text-2xl">${price}</h1>
          </div>
          <div className="flex column gap-2 descr">
            <h2>Description</h2>
            <p className="description">{description}</p>
          </div>
          <div className="flex-center">
            <AddToCart product={product} />
          </div>
        </div>
      ) : (
        <div> no product details available</div>
      )}
    </div>
  );
}

export default Details;
