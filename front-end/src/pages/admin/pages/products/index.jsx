import { useContext } from "react";
import Table from "./components/Table";
import { StateContext } from "../../../../contexts/StateContext";
import ViewProduct from "./components/ViewProduct";

function Products() {
  const { viewProduct } = useContext(StateContext);
  return (
    <div className="flex-1 p-4 relative">
      <Table />
      {viewProduct && <ViewProduct />}
    </div>
  );
}

export default Products;
