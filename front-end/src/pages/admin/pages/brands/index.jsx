import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../../../utils/Constants";
import { AuthContext } from "../../../../contexts/AuthContext";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

import { StateContext } from "../../../../contexts/StateContext";
import AddButton from "../products/components/AddButton";
import AddOne from "../categories/components/AddOne";
import Edit from "../categories/components/Edit";
import Delete from "../categories/components/Delete";

function Brands() {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState("");
  const [deletee, setDeletee] = useState(false);
  const [brandId, setBrandId] = useState(null);
  const { setMessage } = useContext(StateContext);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const { setOverlay } = useContext(StateContext);

  const getBrands = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/brand/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch brands");
      }
      const data = await response.json();
      setBrands(data.brands);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const filterBrands = (id) => {
    const updatedBrands = brands.filter((category) => category._id !== id);
    setBrands(updatedBrands);
  };
  const deleteBrand = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/brand/delete/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete brand");
      }
      const data = await response.json();
      filterBrands(id);
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
    getBrands();
  }, []);

  const notDelete = () => {
    setBrandId(null);
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
        {showAdd && <AddOne type={"brand"} />}
      </div>
      <div className="flex-1 flex-center h-screen">
        <div className="column">
          <h1 className="text-center font-bold  mb-4 text-3xl">Brands</h1>
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
            {brands && (
              <tbody className="divide-y">
                {brands.map((brand, index) => (
                  <tr
                    className={`${
                      index % 2 === 0 ? "bg-gray-200" : "bg-gray-50"
                    } ${brand._id === brandId ? "bg-red-300" : ""} `}
                    key={brand._id}
                  >
                    <td className="px-6 py-3 text-xs font-bold uppercase border border-gray-300 w-16">
                      {index + 1}
                    </td>
                    <td className="px-6 py-3 text-xs font-bold uppercase border border-gray-300">
                      {brand.name}
                    </td>
                    <td
                      className={`px-6 py-3 text-xs font-bold uppercase border-gray-300 flex items-center justify-around space-x-4 ${
                        brand._id === brandId ? "relative" : ""
                      }`}
                    >
                      <AiFillEdit
                        className="text-2xl cursor-pointer"
                        onClick={() => {
                          setBrandId(brand._id);
                          setShowUpdate(true);
                          setOverlay(true);
                        }}
                      />
                      <FaTrashAlt
                        className="text-2xl text-red-500 cursor-pointer"
                        onClick={() => {
                          setBrandId(brand._id);
                          setDeletee(true);
                        }}
                      />
                      {deletee && (
                        <Delete
                          message={"you want to delete this brand?"}
                          id={brandId}
                          notDelete={notDelete}
                          deletee={deleteBrand}
                          loading={loading}
                          error={error}
                          setError={setError}
                        />
                      )}
                      {showUpdate && (
                        <Edit
                          item={brand}
                          setShowUpdate={setShowUpdate}
                          type={"brand"}
                          setCategoryId={setBrandId}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Brands;
