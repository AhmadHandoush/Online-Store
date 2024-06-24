import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function PieCharts() {
  return (
    <div className="flex column gap-5">
      <div className="flex column gap-4 w-72">
        <PieChart
          colors={["red", "blue", "green"]}
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Nike" },
                { id: 1, value: 15, label: "Addidas" },
                { id: 2, value: 20, label: "Under Armour" },
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
