import { useNavigate } from "react-router-dom";
import "./loading.css";
import { useEffect } from "react";

function Loading() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, [navigate]);
  return (
    <div className="flex-center h-screen bg-primary">
      <div className="flex column gap-4">
        <img src="./Capture.PNG" alt="logo" className="w-72 h-18" />
        <div className="flex ball-box">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
