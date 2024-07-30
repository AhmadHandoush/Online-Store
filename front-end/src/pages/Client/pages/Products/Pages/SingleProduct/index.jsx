import "./single.css";

import Details from "./components/Details";
import Images from "./components/Images";

function Single() {
  return (
    <div className="h-screen">
      <section className="single flex rounded w-9/10 justify-between mx-auto ">
        <Images />
        <Details />
      </section>
    </div>
  );
}

export default Single;
