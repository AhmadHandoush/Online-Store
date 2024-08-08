import Loader from "../../../../../../../../components/Loader";
import { BASE_URL } from "../../../../../../../../utils/Constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./images.css";
import Slider from "react-slick";

function Images({ product, loading, error }) {
  if (loading) {
    return <Loader />;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="imagess">
      {product && (
        <Slider {...settings} className="images">
          {product.images.map((image, index) => (
            <div key={index} className="imagee">
              <img
                src={`${BASE_URL}/uploads/${image}`}
                alt={`Slide ${index}`}
                style={{ width: "100%" }}
                className="s-image"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Images;
