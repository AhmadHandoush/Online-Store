import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { StateContext } from "../../../../../contexts/StateContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ViewProduct() {
  const { ViewProduct, setViewProduct, setOverlay } = useContext(StateContext);
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
        <Carousel>
          <div>
            <img src="../HND.png" />
          </div>
          <div>
            <img src="../HND.png" />
          </div>
          <div>
            <img src="../HND.png" />
          </div>
        </Carousel>
      </div>

      <div className=" flex flex-1 column gap-6 h-73">
        <div className="flex justify-between">
          <h2 className="font-bold">Name </h2>
          <h3>product</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Brand </h2>
          <h3>brand</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Category </h2>
          <h3>Category</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Price </h2>
          <h3>200$</h3>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold">Quantity </h2>
          <h3>14</h3>
        </div>
        <div className="overflow-auto">
          <h2 className="font-bold">Description </h2>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
