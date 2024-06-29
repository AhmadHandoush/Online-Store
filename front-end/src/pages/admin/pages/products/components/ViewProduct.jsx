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
      className="flex gap-10 absolute px-10 bg-white     justify-between pt-10 "
      style={{
        zIndex: "1000",
        height: "450px",
        width: "70%",
        top: "50%",
        left: "10%",
      }}
    >
      <span
        className="absolute flex-center p-2 rounded-full flex-center bg-primary text-white cursor-pointer w-8 h-8 font-bold"
        style={{ top: "-10px", right: "-10px" }}
        onClick={() => close()}
      >
        X
      </span>
      <div className="w-72 h-72">
        <Carousel infiniteLoop autoPlay>
          {images.map((img) => (
            <div>
              <img src={`${BASE_URL}/uploads/${img}`} alt={`${product.name}`} />
            </div>
          ))}
          {/* <div>
            <img
              src={`${BASE_URL}/uploads/${product.images[0]}`}
              alt={`${product.name}`}
            />
          </div>
          <div>
            <img
              src={`${BASE_URL}/uploads/${product.images[1]}`}
              alt={`${product.name}`}
            />
          </div>
          <div>
            <img
              src={`${BASE_URL}/uploads/${product.images[2]}`}
              alt={`${product.name}`}
            />
          </div> */}
        </Carousel>
      </div>

      <div className=" flex flex-1 column gap-6 h-73">
        <div className="flex justify-between">
          <h2 className="font-bold">Name </h2>
          <h3>{name}</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Brand </h2>
          <h3>{brand.name}</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Category </h2>
          <h3>{category.name}</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Price </h2>
          <h3>{price}$</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Quantity </h2>
          <h3>{quantity}</h3>
        </div>
        <div className="overflow-auto">
          <h2 className="font-bold">Description </h2>
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
