import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import Hero from "./components/Hero";

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
    </div>
  );
}

export default Home;
