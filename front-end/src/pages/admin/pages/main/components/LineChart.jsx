import { LineChart } from "@mui/x-charts/LineChart";

function LineCharts() {
  return (
    <div>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={600}
        height={450}
      />
      <h3 className="text-center font-bold text-xl">Orders</h3>
    </div>
  );
}

export default LineCharts;
