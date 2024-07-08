import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../../../utils/Constants";
import { AuthContext } from "../../../../contexts/AuthContext";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import Delete from "./components/Delete";
import { StateContext } from "../../../../contexts/StateContext";
import Edit from "./components/Edit";
import AddButton from "../products/components/AddButton";
import AddOne from "./components/AddOne";

function Categories() {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [deletee, setDeletee] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const { setMessage } = useContext(StateContext);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const { setOverlay } = useContext(StateContext);

  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/category/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data.categories);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const filterCategories = (id) => {
    const updatedCategories = categories.filter(
      (category) => category._id !== id
    );
    setCategories(updatedCategories);
  };
  const deleteCategory = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/category/delete/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete category");
      }
      const data = await response.json();
      filterCategories(id);
      setLoading(false);
      setMessage(data.message);
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const notDelete = () => {
    setCategoryId(null);
    setDeletee(false);
  };
  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };
  return (
    <div className="column gap-2 p-4 w-9/10">
      <div>
        <div className="flex justify-end">
          <AddButton change={handleShowAdd} />
        </div>
        {showAdd && <AddOne type={"category"} />}
      </div>
      <div className="flex-1 flex-center h-screen">
        <div className="column">
          <h1 className="text-center font-bold  mb-4 text-3xl">Categories</h1>
          <table className="divide-gray-200 bg-white shadow-md rounded-lg w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary border-r border-gray-300">
                  #
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary border-r border-gray-300">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {categories.map((category, index) => (
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-gray-200" : "bg-gray-50"
                  } ${category._id === categoryId ? "bg-red-300" : ""} `}
                  key={category._id}
                >
                  <td className="px-6 py-3 text-xs font-bold uppercase border border-gray-300 w-16">
                    {index + 1}
                  </td>
                  <td className="px-6 py-3 text-xs font-bold uppercase border border-gray-300">
                    {category.name}
                  </td>
                  <td
                    className={`px-6 py-3 text-xs font-bold uppercase border-gray-300 flex items-center justify-around space-x-4 ${
                      category._id === categoryId ? "relative" : ""
                    }`}
                  >
                    <AiFillEdit
                      className="text-2xl cursor-pointer"
                      onClick={() => {
                        setCategoryId(category._id);
                        setShowUpdate(true);
                        setOverlay(true);
                      }}
                    />
                    <FaTrashAlt
                      className="text-2xl text-red-500 cursor-pointer"
                      onClick={() => {
                        setCategoryId(category._id);
                        setDeletee(true);
                      }}
                    />
                    {deletee && (
                      <Delete
                        message={"you want to delete this Category?"}
                        id={categoryId}
                        notDelete={notDelete}
                        deletee={deleteCategory}
                        loading={loading}
                        error={error}
                        setError={setError}
                      />
                    )}
                    {showUpdate && (
                      <Edit
                        item={category}
                        setShowUpdate={setShowUpdate}
                        type={"Category"}
                        setCategoryId={setCategoryId}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Categories;
