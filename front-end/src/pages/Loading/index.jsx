import { useNavigate } from "react-router-dom";
import "./loading.css";

function Loading() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/home");
  }, 3000);
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
