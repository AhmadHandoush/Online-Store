import { PieChart } from "@mui/x-charts/PieChart";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../../../../utils/Constants";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { ProductsContext } from "../../../../../contexts/ProductsContext";

function PieCharts() {
  const { products } = useContext(ProductsContext);
  const [brandNumber, setBrandsNumber] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);
  let brandCount = {};
  let categoryCount = {};
  for (let product of products) {
    if (brandCount[product.brand]) {
      brandCount[product.brand]++;
    } else {
      brandCount[product.brand] = 1;
    }
  }
  for (let product of products) {
    if (categoryCount[product.category]) {
      categoryCount[product.category]++;
    } else {
      categoryCount[product.category] = 1;
    }
  }

  return (
    <div className="flex column gap-5">
      {error && <p className="text-red-500"> {error}</p>}
      <div className="flex column gap-4 w-72">
        <PieChart
          colors={["red", "blue", "green", "gray"]}
          series={[
            {
              data: [
                { id: 0, value: 12, label: "Nike" },
                { id: 1, value: 8, label: "Addidas" },
                { id: 1, value: 2, label: "Zara" },
                { id: 2, value: 7, label: "Under Armour" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
        <h3 className="text-center font-bold text-xl">Brands</h3>
      </div>
      <div className="flex column gap-4 w-72">
        <PieChart
          colors={["gray", "blue", "red"]}
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Shoes" },
                { id: 1, value: 10, label: "Shirt" },
                { id: 2, value: 20, label: "Jacket" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
        <h3 className="text-center font-bold text-xl">Categories</h3>
      </div>
    </div>
  );
}

export default PieCharts;
