import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { useContext } from "react";
import AdminHeader from "./components/header/AdminHeader";
import { StateContext } from "../../contexts/StateContext";
import Overlay from "../../components/overlay";

import Success from "./components/Success";

function Admin() {
  const { overlaying, openSide, message } = useContext(StateContext);

  return (
    <div className="admin flex relative">
      {overlaying && <Overlay />}
      {openSide && <Overlay />}
      <Sidebar />
      <div className="flex-1 ">
        <AdminHeader />
        <Outlet />
        {message && <Success message={message} />}
      </div>
    </div>
  );
}

export default Admin;
