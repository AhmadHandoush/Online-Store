import Title from "../../../../Components/title";
import "./comparison.css";

function Comparison() {
  return (
    <section className="comparison flex column gap-4 pb-5">
      <Title title={"Comparison"} />
      <div className="info flex-center mt-5">
        <div className="old p-2  text-white bg-primary rounded flex column gap-2">
          <h1>Physical Shoppping</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing.Lorem ipsum
            dolor, sit amet consectetur adipisicing.Lorem ipsum dolor.
          </p>
        </div>

        <div className="online p-2 text-white  rounded flex column gap-2 ">
          <h1 className="text-primary">Online Shopping</h1>
          <p className="text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing.Lorem ipsum
            dolor, sit amet consectetur adipisicing.Lorem ipsum dolor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Comparison;
