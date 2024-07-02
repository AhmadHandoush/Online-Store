import { useContext } from "react";
import Table from "./components/Table";
import { StateContext } from "../../../../contexts/StateContext";
import ViewProduct from "./components/ViewProduct";
import Search from "./components/Search";

function Products() {
  const { viewProduct } = useContext(StateContext);
  return (
    <div className="flex-1 p-4 relative">
      <Search />
      <Table />
      {viewProduct && <ViewProduct />}
    </div>
  );
}

export default Products;
