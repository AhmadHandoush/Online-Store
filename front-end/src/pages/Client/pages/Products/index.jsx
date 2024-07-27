import ShowAll from "./components/all-products";
import Side from "./components/side";
import Top from "./components/top";

function AllProducts() {
  return (
    <div>
      <Top />
      <div className="flex mt-4">
        <Side />
        <ShowAll />
      </div>
    </div>
  );
}

export default AllProducts;
