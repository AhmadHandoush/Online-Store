import { GiHamburgerMenu } from "react-icons/gi";
import "./adminheader.css";
import { useContext } from "react";
import { StateContext } from "../../../../contexts/StateContext";

function AdminHeader() {
  const { openSide, setOpenSide } = useContext(StateContext);
  return (
    <header className="bg-gray-500 flex items-center px-2 ">
      <GiHamburgerMenu
        className="menu"
        color="white"
        size={"30px"}
        onClick={() => setOpenSide(!openSide)}
      />
    </header>
  );
}

export default AdminHeader;
