import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import Hero from "./components/Hero";
import Second from "./components/Second";
import Comparison from "./components/third";
import First from "./components/first";
import Gallery from "./components/Gallery";

function Home() {
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/auth");
  //   }
  // });
  const { user } = useContext(AuthContext);
  return (
    <div className="home">
      <Hero />
      <First />
      <Second />
      <Gallery />
      <Comparison />
    </div>
  );
}

export default Home;
