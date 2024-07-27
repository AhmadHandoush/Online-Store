import Side from "./components/side";
import Top from "./components/top";

function AllProducts() {
  return (
    <div>
      <Top />
      <div className="flex mt-4">
        <Side />
      </div>
    </div>
  );
}

export default AllProducts;
