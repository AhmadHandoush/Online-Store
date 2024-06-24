import { useContext, useEffect, useState } from "react";
import Loader from "../../../../../components/Loader";
import InfoCard from "./InfoCard";
import { BASE_URL } from "../../../../../utils/Constants";
import { ProductsContext } from "../../../../../contexts/ProductsContext";

function Overview() {
  const { products, brands, categories, orders, loading } =
    useContext(ProductsContext);

  return (
    <section
      className="flex-1 py-4 grid   grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4 gap-3
                justify-items-center"
    >
      <InfoCard>
        <div className="p-4 px-20 flex column gap-2 bg-red-500 rounded ">
          <h2 className="text-center font-bold text-xl text-white">Products</h2>
          {loading ? (
            <Loader />
          ) : (
            <h3 className="text-center text-xl text-xl font-bold">
              {products.length}
            </h3>
          )}
        </div>
      </InfoCard>
      <InfoCard>
        <div className="p-4 px-20 flex column gap-2 bg-green-500 rounded">
          <h2 className="text-center text-white font-bold text-xl">
            Categories
          </h2>
          {loading ? (
            <Loader />
          ) : (
            <h3 className="text-center text-secondary font-bold text-xl">
              {categories.length}
            </h3>
          )}
        </div>
      </InfoCard>
      <InfoCard>
        <div className="p-4 px-20 flex column gap-2 bg-blue-500 rounded">
          <h2 className="text-center text-white font-bold text-xl">Brands</h2>
          <h3 className="text-center text-secondary text-xl font-bold">12</h3>
        </div>
      </InfoCard>
      <InfoCard>
        <div className="p-4 px-20 flex column gap-2 bg-orange-500 rounded">
          <h2 className="text-center font-bold text-white font-bold text-xl">
            Orders
          </h2>
          <div className="text-center">
            {loading ? (
              <Loader />
            ) : (
              <h3 className="text-center text-xl font-bold">{orders.length}</h3>
            )}
          </div>
        </div>
      </InfoCard>
    </section>
  );
}
export default Overview;
