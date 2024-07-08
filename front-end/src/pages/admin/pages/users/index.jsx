import { FaTrashAlt } from "react-icons/fa";
import Search from "./components/Search";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../../../utils/Constants";
import { AuthContext } from "../../../../contexts/AuthContext";
import { StateContext } from "../../../../contexts/StateContext";

function Users() {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const { setMessage, setOverlay } = useContext(StateContext);
  const [showAdd, setShowAdd] = useState(false);
  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch brands");
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="flex-1 p-4">
      <div className="mb-4">
        <Search />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border border-gray-300">
              <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary  ">
                #
              </th>
              <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary ">
                Username
              </th>
              <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary ">
                Email
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-white bg-primary ">
                Action
              </th>
            </tr>
          </thead>
          {users && (
            <tbody>
              {users.map((user, index) => (
                <tr className="border border-gray-300">
                  <td className="px-6 py-3 text-xs font-bold uppercase text-center ">
                    {index + 1}
                  </td>
                  <td className="px-6 py-3 text-xs font-bold uppercase  text-center">
                    {user.firstName} {user.firstName}
                  </td>
                  <td className="px-6 py-3 text-xs font-bold  text-center">
                    {user.email}
                  </td>
                  <td className="px-2 py-3 text-xs font-bold uppercase flex-center text-center">
                    <button className="bg-red-500 flex-center gap-2 p-2 rounded text-white px-3 hover:opacity-30">
                      <span>Delete</span>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default Users;
