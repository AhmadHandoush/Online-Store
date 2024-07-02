import { useContext, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { ProductsContext } from "../../../../../contexts/ProductsContext";

function Search() {
  const { searchQuery, setSearchQuery } = useContext(ProductsContext);

  return (
    <div className="w-72 px-2 bg-gray-200 py-2 flex gap-5 mb-10 rounded items-center ">
      <IoSearchSharp className="size-6 text-gray-400" />
      <input
        type="text"
        placeholder="Search for product"
        className="bg-transparent border-none outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
