import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { TbBrandSupabase } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { useContext} from "react";
import { StateContext } from "../../../../contexts/StateContext";

function Sidebar() {
  const { openSide } = useContext(StateContext);
  return (
    <aside
      className={`${
        openSide && "open"
      } w-60 pt-2 bg-primary transition-all h-screen md:sticky top-0 `}
    >
      <div className="logo flex-start pl-3  pb-2 ">
        <img src="./Capture.png" alt="logo" className="w-32 h-9" />
      </div>
      <hr />
      <ul className="px-3 pt-5 flex column gap-5">
        <li className="rounded hover:bg-white group rounded transition-all">
          <NavLink
            to={"/admin-dashboard/main"}
            className="flex items-center gap-x-2 p-2 "
          >
            <AiOutlineAppstore className="text-lg text-white font-bold size-5 group-hover:text-primary" />
            <span className="text-base font-bold text-white  group-hover:text-primary">
              Dashboard
            </span>
          </NavLink>
        </li>
        <li className="hover:bg-white group rounded transition-all">
          <NavLink to={"categories"} className="flex items-center gap-x-2 p-2 ">
            <MdCategory className="text-lg text-white font-bold size-5 group-hover:text-primary" />
            <span className="text-base font-bold text-white  group-hover:text-primary">
              Categories
            </span>
          </NavLink>
        </li>
        <li className="hover:bg-white group rounded transition-all">
          <NavLink
            to={"/admin-dashboard/brands"}
            className="flex items-center gap-x-2 p-2  "
          >
            <TbBrandSupabase className="text-lg text-white font-bold size-5 group-hover:text-primary" />
            <span className="text-base font-bold text-white  group-hover:text-primary">
              Brands
            </span>
          </NavLink>
        </li>
        <li className="hover:bg-white group rounded transition-all">
          <NavLink
            to={"/admin-dashboard/products"}
            className="flex items-center gap-x-2 p-2 "
          >
            <MdOutlineProductionQuantityLimits className="text-lg text-white font-bold size-5 group-hover:text-primary" />
            <span className="text-base font-bold text-white group-hover:text-primary ">
              Products
            </span>
          </NavLink>
        </li>
        <li className="hover:bg-white group rounded transition-all">
          <NavLink
            to={"/admin-dashboard/orders"}
            className="flex items-center gap-x-2 p-2 "
          >
            <FaShoppingCart className="text-lg text-white font-bold size-5 group-hover:text-primary" />
            <span className="text-base font-bold text-white group-hover:text-primary">
              Orders
            </span>
          </NavLink>
        </li>
        <li className="hover:bg-white group rounded transition-all">
          <NavLink
            to={"/admin-dashboard/users"}
            className="flex items-center gap-x-2 p-2 "
          >
            <FaUsers className="text-lg text-white font-bold size-5 group-hover:text-primary" />
            <span className="text-base font-bold text-white group-hover:text-primary">
              Users
            </span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
