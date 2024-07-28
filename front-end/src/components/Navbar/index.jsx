import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const token = localStorage.getItem("token");
  const { isLogin, setIsLogin } = useContext(AuthContext);

  useEffect(() => {}, [token]);
  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
  };
  return (
    <nav className="bg-primary ">
      <div className=" container flex justify-between items-center  p-2 m-auto">
        {!openNav ? (
          <IoMdMenu
            className="lg:hidden md:hidden text-3xl text-white sm:block"
            onClick={() => setOpenNav(true)}
          />
        ) : (
          <IoCloseSharp
            className="lg:hidden  md:hidden text-3xl text-white sm:block"
            onClick={() => setOpenNav(false)}
          />
        )}

        <div className=" logo w-32 h-9 flex items-center ">
          <Link to={"overview"}>
            <img src="../Capture.png" alt="HND" />
          </Link>
        </div>
        <ul className={`flex items-center lg:gap-5 ${openNav ? "open" : ""}`}>
          <li>
            <NavLink className="px-5 py-2  flex-center" to={"overview"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="px-5 py-2   flex-center" to={"all-products"}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="px-5 py-2   flex-center" to={"services"}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="px-5 py-2   flex-center" to={"about"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="px-5 py-2   flex-center" to={"contact"}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="icons flex gap-4 items-center">
          <Link>
            <CiHeart className="text-3xl  text-white" />
          </Link>
          <Link>
            <MdOutlineShoppingCart className="text-2xl text-white " />
          </Link>
          {!isLogin ? (
            <Link
              className="btn-login bg-primary border border-white flex-center text-white rounded p-2 "
              to={"/auth"}
            >
              Login
            </Link>
          ) : (
            <button
              className="btn-login bg-primary border border-white flex-center text-white rounded p-2 outline-none "
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
