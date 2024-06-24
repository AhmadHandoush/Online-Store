import Overview from "./components/Overview";
import PieCharts from "./components/PieChart";
import Statistics from "./components/Statistics";

function Main() {
  return (
    <div className="flex column gap-10 px-4">
      <Overview />
      <Statistics />
    </div>
  );
}

export default Main;
