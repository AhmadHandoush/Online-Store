import Card from "./components/card";

function ShowAll() {
  const products = [
    {
      id: 1,
      image: "../22.png",
      price: 200,
      name: "shoes",
      description:
        "all is good in oe way at the top of the all of instructors in order to be good  as well as ",
    },
    {
      id: 2,
      image: "../22.png",
      price: 200,
      name: "shoes",
      description:
        "all is good in oe way at the top of the all of instructors in order to be good  as well as ",
    },
    {
      id: 3,
      image: "../22.png",
      price: 200,
      name: "shoes",
      description:
        "all is good in oe way at the top of the all of instructors in order to be good  as well as ",
    },
    {
      id: 4,
      image: "../22.png",
      price: 200,
      name: "shoes",
      description:
        "all is good in oe way at the top of the all of instructors in order to be good  as well as ",
    },
    {
      id: 5,
      image: "../22.png",
      price: 200,
      name: "shoes",
      description:
        "all is good in oe way at the top of the all of instructors in order to be good  as well as ",
    },
    {
      id: 6,
      image: "../22.png",
      price: 200,
      name: "shoes",
      description:
        "all is good in oe way at the top of the all of instructors in order to be good  as well as ",
    },
  ];
  return (
    <div
      className="grid grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4 gap-3
                justify-items-center
                pl-4 mr-auto ml-auto w-9/10"
    >
      {products.map((product, i) => (
        <Card key={i} product={product} />
      ))}
    </div>
  );
}

export default ShowAll;
