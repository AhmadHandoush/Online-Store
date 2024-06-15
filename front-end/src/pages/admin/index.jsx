import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { useContext } from "react";
import AdminHeader from "./components/header/AdminHeader";
import { StateContext } from "../../contexts/StateContext";
import Overlay from "../../components/overlay";

function Admin() {
  const { openSide, setOpenSide } = useContext(StateContext);
  return (
    <div className="admin flex ">
      {openSide && <Overlay />}
      <Sidebar />
      <div className="flex-1">
        <AdminHeader className="flex-1" />
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
