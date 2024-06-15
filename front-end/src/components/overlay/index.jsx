import { useContext } from "react";
import "./overlay.css";
import { StateContext } from "../../contexts/StateContext";
function Overlay() {
  const { setOpenSide } = useContext(StateContext);
  return <div className="overlay" onClick={() => setOpenSide(false)}></div>;
}

export default Overlay;
