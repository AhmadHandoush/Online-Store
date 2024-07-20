import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

function Client() {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Client;
