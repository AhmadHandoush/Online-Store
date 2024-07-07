import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { StateContext } from "../../../../../contexts/StateContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BASE_URL } from "../../../../../utils/Constants";
import { ProductsContext } from "../../../../../contexts/ProductsContext";

function ViewProduct() {
  const { ViewProduct, setViewProduct, setOverlay } = useContext(StateContext);
  const { product } = useContext(ProductsContext);
  const { name, brand, category, price, description, quantity, images } =
    product;

  const close = () => {
    setViewProduct(false);
    setOverlay(false);
  };
  return (
    <div
      className="flex flex-col md:flex-row gap-4 md:gap-10 px-4 md:px-10 bg-white justify-between pt-6 md:pt-10 rounded"
      style={{
        position: "fixed",
        zIndex: "1000",
        height: "70vh",
        width: "90%",
        maxWidth: "800px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <span
        className="absolute p-2 rounded-full flex-center bg-primary text-white cursor-pointer w-8 h-8 font-bold"
        style={{ top: "-10px", right: "-10px" }}
        onClick={() => close()}
      >
        X
      </span>
      <div className="w-full md:w-1/2 h-72">
        <Carousel infiniteLoop autoPlay>
          {images.map((img) => (
            <div key={img} className="h-72">
              <img src={`${BASE_URL}/uploads/${img}`} alt={`${product.name}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-1 flex-col gap-2 md:gap-6 overflow-auto">
        <div className="flex justify-between">
          <h2 className="font-bold">Name</h2>
          <h3>{name}</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Brand</h2>
          <h3>{brand.name}</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Category</h2>
          <h3>{category.name}</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Price</h2>
          <h3>{price}$</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Quantity</h2>
          <h3>{quantity}</h3>
        </div>
        <div className="overflow-auto">
          <h2 className="font-bold">Description</h2>
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
