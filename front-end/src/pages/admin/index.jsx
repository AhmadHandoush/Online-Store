import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";


function Admin() {
  return (
    <div className="admin flex ">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
