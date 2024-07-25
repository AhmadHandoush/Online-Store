import { useContext, useEffect, useState } from "react";
import Title from "../../../../Components/title";
import "./first.css";
import { BASE_URL } from "../../../../../../utils/Constants";
import { AuthContext } from "../../../../../../contexts/AuthContext";
import Loader from "../../../../../../components/Loader";

function First() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const { token } = useContext(AuthContext);
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
      <div className="flex flex-wrap justify-between gap-6 pt-4">
        <div className="text">
          <h1 className="font-bold text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            nam! Obcaecati omnis accusamus, voluptas tempore unde aliquid
            quidem? Quos, dicta!
          </h1>
        </div>
        <div className="data flex-wrap flex ">
          <div className="flex column">
            <h3>Products</h3>
            {data ? <b>{data.products}</b> : "Loading..."}
          </div>
          <div className="flex column">
            <h3>Categories</h3>
            {data ? <b>{data.categories}</b> : "Loading..."}
          </div>
          <div className="flex column">
            <h3>Brands</h3>
            {data ? <b>{data.brands}</b> : "Loading..."}
          </div>
          <div className="flex column">
            <h3>Orders</h3>
            {data ? <b>{data.orders}</b> : "Loading..."}
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
