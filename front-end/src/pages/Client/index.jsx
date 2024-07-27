import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "./Components/footer";

function Client() {
  return (
    <div className="h-screen">
      <Header />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Client;
