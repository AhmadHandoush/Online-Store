import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./images.css";

function Images() {
  return (
    <div className="images">
      <Carousel>
        <div>
          <img src="../11.png" />
        </div>
        <div>
          <img src="../11.png" />
        </div>
        <div>
          <img src="../11.png" />
        </div>
      </Carousel>
    </div>
  );
}

export default Images;
