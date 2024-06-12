import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth");
    }
  });

  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sapiente
      nesciunt asperiores possimus nulla facere magnam corporis natus non
      dolorem! Voluptates a earum veritatis vitae, quae sapiente consequatur
      architecto possimus!
    </div>
  );
}

export default Home;
