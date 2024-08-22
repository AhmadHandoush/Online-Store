import Title from "../../../../Components/title";
import "./second.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const images = [
  "../addidas.png",
  "../zara.png",
  "../Lacost.jpg",
  "../addidas.png",
  "../zara.png",
  "../H.png",
  "../Lacost.jpg",
];
function Second() {
  return (
    <section className="second flex column gap-4">
      <Title title="Our Top Brands" />
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="carousel bg-gray-200"
      >
        {images.map((image, index) => (
          <div className="slide">
            <img src={image} alt={`Slide ${index + 1}`} className="s-image" />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Second;
