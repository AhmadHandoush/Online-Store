import LineCharts from "./LineChart";
import PieCharts from "./PieChart";

function Statistics() {
  return (
    <section className="flex p-4 gap-60 bg-green-200 flex-wrap   ">
      <LineCharts />
      <PieCharts />
    </section>
  );
}

export default Statistics;
