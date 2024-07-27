import { useState } from "react";
import "./hero.css";
function Hero() {
  const [open, setOpen] = useState(false);

  setTimeout(() => {
    setOpen(true);
  }, 3000);
  return (
    <div className="hero w-full flex relative">
      <img
        src="../shop2.png"
        alt="HND-new"
        className={`new ${open ? "open" : "before"} `}
      />
      <img
        src="../shop1.png"
        alt="HND-old"
        className={`old ${open && "close"} `}
      />
    </div>
  );
}

export default Hero;
