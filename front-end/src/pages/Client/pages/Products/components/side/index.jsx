import "./side.css";

function Side() {
  return (
    <div className="side p-4 hidden md:block">
      <div className="">
        <div className="categories mb-5">
          <h1 className="text-black font-bold mb-2">Categories</h1>
          <ul className="flex column gap-3">
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>{" "}
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>{" "}
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>{" "}
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>
          </ul>
        </div>
        <div className="brands mb-5">
          <h1 className="text-black font-bold mb-2">Brands</h1>
          <ul className="flex column gap-3">
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>{" "}
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>{" "}
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>{" "}
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                shoes
              </label>
            </li>
          </ul>
        </div>
        <div className="gender mb-5 ">
          <h1 className="text-black font-bold mb-2">Gender</h1>
          <ul className="flex column gap-3">
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                Male
              </label>
            </li>{" "}
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                Female
              </label>
            </li>
          </ul>
        </div>
        <div className="colors mb-5 ">
          <h1 className="text-black font-bold mb-2">Colors</h1>
          <ul className="flex column gap-3">
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                green
              </label>
            </li>{" "}
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                blue
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2 text-black">
                <input type="checkbox" value="category" />
                white
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Side;
