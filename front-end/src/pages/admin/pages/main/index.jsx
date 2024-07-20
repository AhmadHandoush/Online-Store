import { useNavigate } from "react-router-dom";
import Overview from "./components/Overview";
import PieCharts from "./components/PieChart";
import Statistics from "./components/Statistics";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";

function Main() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, []);
  return (
    <div className="flex column gap-10 px-4">
      <Overview />
      <Statistics />
    </div>
  );
}

export default Main;
