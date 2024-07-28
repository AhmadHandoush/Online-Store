import { IoSearch } from "react-icons/io5";
import "./search.css";
import { FaFilter } from "react-icons/fa";
import { useEffect, useState } from "react";

function SearchProduct({ setFilteredProducts, filteredProducts, products }) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filter = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filter);
  }, [searchQuery, filteredProducts]);

  return (
    <section className=" w-full md:w-9/10 mr-auto ml-auto search  flex gap-5 items-center ">
      <FaFilter className="primary text-xl" />
      <div className=" flex gap-2 p-2 items-center rounded border border-gray-200 border-2 searched ">
        <input
          type="text"
          placeholder="Search by name..."
          className="border-none outline-none w-full flex-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IoSearch className="text-gray-500 text-xl" />
      </div>
    </section>
  );
}

export default SearchProduct;
