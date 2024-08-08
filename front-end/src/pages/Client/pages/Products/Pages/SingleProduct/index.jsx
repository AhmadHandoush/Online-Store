import "./single.css";

import Details from "./components/Details";
import Images from "./components/Images";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../../utils/Constants";
import Loader from "../../../../../../components/Loader";

function Single() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async (id) => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/product/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData(id);
  }, [id]);

  return (
    <div className="h-screen pt-4 pb-4 single">
      {loading ? (
        <div className="flex-center">
          <Loader />
        </div>
      ) : (
        <section className="singlee flex rounded w-6/10 justify-between mx-auto gap-2">
          <Images product={product} loading={loading} error={error} />

          <Details product={product} loading={loading} error={error} />
        </section>
      )}
    </div>
  );
}

export default Single;
