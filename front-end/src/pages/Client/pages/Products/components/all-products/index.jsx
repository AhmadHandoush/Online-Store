import { useContext, useEffect, useState } from "react";
import Card from "./components/card";
import { ProductsContext } from "../../../../../../contexts/ProductsContext";

function ShowAll({ filteredProducts }) {
  const { products } = useContext(ProductsContext);

  return (
    <div
      className="grid grid-cols-2
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4 gap-3
                justify-items-center
                 mr-auto ml-auto w-full md:w-9/10
                 "
    >
      {filteredProducts.map((product, i) => (
        <Card key={i} product={product} />
      ))}
    </div>
  );
}

export default ShowAll;
