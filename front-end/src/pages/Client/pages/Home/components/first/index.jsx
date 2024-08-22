import { useContext, useEffect, useState } from "react";
import Title from "../../../../Components/title";
import "./first.css";
import { BASE_URL } from "../../../../../../utils/Constants";

function First() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    products: null,
    orders: null,
    categories: null,
    brands: null,
  });

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/product/data/number`);
      if (!response.ok) {
        throw new Error("Failed to fetch brands");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="statistics flex column gap-5 p-3 ">
      <Title title={"Overview"} />
      <div className="flex flex-wrap justify-between gap-6 pt-2 ">
        <div className="text ">
          <h1 className="font-bold text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            nam! Obcaecati omnis accusamus, voluptas tempore unde aliquid
            quidem? Quos, dicta!
          </h1>
        </div>
        <div className="data flex-wrap flex ">
          <div className="flex gap-5">
            <div className="flex column">
              <h3 className="font-bold">Products</h3>
              {!loading ? <p>{data.products}</p> : "Loading..."}
            </div>
            <div className="flex column">
              <h3 className="font-bold">Categories</h3>
              {!loading ? <p>{data.categories}</p> : "Loading..."}
            </div>
          </div>
          <div className="flex gap-5 second-line">
            <div className="flex column">
              <h3 className="font-bold">Brands</h3>
              {!loading ? <p>{data.brands}</p> : "Loading..."}
            </div>
            <div className="flex column">
              <h3 className="font-bold">Orders</h3>
              {!loading ? <p>{data.orders}</p> : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
