import { useContext, useEffect, useState } from "react";
import ShowAll from "./components/all-products";
import SearchProduct from "./components/all-products/components/search";
import Side from "./components/side";
import Top from "./components/top";
import { ProductsContext } from "../../../../contexts/ProductsContext";

function AllProducts() {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div>
      <Top />
      <div className="flex mt-4 pl-2">
        <Side />
        <div className="flex column gap-5 ml-auto mr-auto w-9/10  items-center">
          <SearchProduct
            setFilteredProducts={setFilteredProducts}
            filteredProducts={filteredProducts}
            products={products}
          />
          <ShowAll filteredProducts={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
