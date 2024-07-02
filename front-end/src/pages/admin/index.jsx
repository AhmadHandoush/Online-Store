import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { useContext, useEffect } from "react";
import AdminHeader from "./components/header/AdminHeader";
import { StateContext } from "../../contexts/StateContext";
import Overlay from "../../components/overlay";
import { AuthContext } from "../../contexts/AuthContext";
import Success from "./components/Success";

function Admin() {
  const { overlaying, openSide, message } = useContext(StateContext);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (token) {
  //     console.log(user.role);
  //   } else {
  //     navigate("/auth");
  //   }
  // }, [user]);
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
