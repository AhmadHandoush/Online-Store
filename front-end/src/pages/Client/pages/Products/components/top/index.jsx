import "./top.css";
import React from "react";
import Slider from "react-slick";

function Top() {
  const images = [
    "../shop1.png",
    "../shop1.png",
    "../shop1.png",
    "../shop1.png",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="carousel-container">
      <Slider {...settings} className="car">
        {images.map((image, index) => (
          <div key={index} className="con">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image s-image"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Top;
