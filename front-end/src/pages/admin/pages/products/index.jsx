import { useContext, useState } from "react";
import Table from "./components/Table";
import { StateContext } from "../../../../contexts/StateContext";
import ViewProduct from "./components/ViewProduct";
import Search from "./components/Search";
import AddButton from "./components/AddButton";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";
import Back from "./components/Back";

function Products() {
  const { viewProduct, updateProduct } = useContext(StateContext);
  const [addProduct, setAddProduct] = useState(false);

  const change = () => {
    setAddProduct(!addProduct);
  };
  return (
    <div className="flex-1 column  p-4 relative ">
      <div className="flex justify-between items-center mb-10">
        {!addProduct && <Search />}
        {addProduct ? <Back change={change} /> : <AddButton change={change} />}
      </div>
      {addProduct ? <AddProduct /> : <Table />}
      {viewProduct && <ViewProduct />}
      {updateProduct && <UpdateProduct />}
    </div>
  );
}

export default Products;
