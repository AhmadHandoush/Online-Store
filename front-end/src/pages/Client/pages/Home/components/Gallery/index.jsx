import Title from "../../../../Components/title";
import "./gallery.css";

function Gallery() {
  return (
    <section className="gallery column pt-5 p-3">
      <Title title={"Gallery"} />
      <div className="flex gap-2 pt-4">
        <div className="one">
          <img src="../1.png" alt="HND-1" className="s-image" />
        </div>
        <div className="two flex column gap-2">
          <div className="first flex gap-2 w-full justify-between">
            <div>
              <img src="../11.png" alt="Hnd-2" className="s-image" />
            </div>
            <div>
              <img src="../22.png" alt="Hnd-2" className="s-image" />
            </div>
            <div>
              <img src="../33.jpg" alt="Hnd-3" className="s-image" />
            </div>
          </div>
          <div className="second">
            <img src="../store.jpg" alt="Hnd-4" className="s-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
