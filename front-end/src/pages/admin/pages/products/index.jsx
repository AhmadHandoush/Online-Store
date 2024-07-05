import { useContext } from "react";
import Table from "./components/Table";
import { StateContext } from "../../../../contexts/StateContext";
import ViewProduct from "./components/ViewProduct";
import Search from "./components/Search";
import AddButton from "./components/AddButton";
import UpdateProduct from "./components/UpdateProduct";

function Products() {
  const { viewProduct, updateProduct } = useContext(StateContext);
  return (
    <div className="flex-1 column  p-4 relative ">
      <div className="flex justify-between items-center mb-10">
        <Search />
        <AddButton />
      </div>
      <Table />
      {viewProduct && <ViewProduct />}
      {updateProduct && <UpdateProduct />}
    </div>
  );
}

export default Products;
