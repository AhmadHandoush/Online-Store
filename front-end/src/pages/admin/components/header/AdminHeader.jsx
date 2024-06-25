import { GiHamburgerMenu } from "react-icons/gi";
import "./adminheader.css";
import { useContext } from "react";
import { StateContext } from "../../../../contexts/StateContext";

function AdminHeader() {
  const { openSide, setOpenSide, setOverlay } = useContext(StateContext);

  return (
    <header className="bg-gray-200 flex items-center px-2 sticky top-0 z-10 ">
      <GiHamburgerMenu
        className="menu"
        color="white"
        size={"30px"}
        onClick={() => setOpenSide(!openSide)}
      />
      <div></div>
    </header>
  );
}

export default AdminHeader;
