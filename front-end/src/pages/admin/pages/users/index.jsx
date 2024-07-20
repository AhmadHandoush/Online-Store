import { FaTrashAlt } from "react-icons/fa";
import Search from "./components/Search";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../../../utils/Constants";
import { AuthContext } from "../../../../contexts/AuthContext";
import { StateContext } from "../../../../contexts/StateContext";
import Delete from "./components/Delete";

function Users() {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState("");
  const { setMessage, setOverlay } = useContext(StateContext);
  const [showDelete, setShowDelete] = useState(false);
  const [userId, setUserId] = useState(null);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      setUsers(users.filter((user) => user._id !== id));
      setFilteredUsers(filteredUsers.filter((user) => user._id !== id));
      setMessage("User deleted successfully");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setShowDelete(false);
      setUserId(null);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex-1 p-4">
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div className="mb-4">
        <Search setFilteredUsers={setFilteredUsers} users={users} />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border border-gray-300">
              <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary">
                #
              </th>
              <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary">
                Username
              </th>
              <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary">
                Email
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-white bg-primary">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user._id}
                className={`${index % 2 === 0 ? "bg-gray-200" : "bg-gray-50"} ${
                  user._id === userId ? "bg-red-300" : ""
                }`}
              >
                <td className="px-6 py-3 text-xs font-bold uppercase text-center">
                  {index + 1}
                </td>
                <td className="px-6 py-3 text-xs font-bold uppercase text-center">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-3 text-xs font-bold text-center">
                  {user.email}
                </td>
                <td className="px-2 py-3 text-xs font-bold uppercase flex-center text-center relative">
                  <button
                    className="bg-red-500 flex-center gap-2 p-2 rounded text-white px-3 hover:opacity-80"
                    onClick={() => {
                      setUserId(user._id);
                      setShowDelete(true);
                    }}
                  >
                    <span>Delete</span>
                    <FaTrashAlt />
                  </button>
                  {showDelete && userId === user._id && (
                    <Delete
                      deleteUser={deleteUser}
                      setUserId={setUserId}
                      setShowDelete={setShowDelete}
                      userId={userId}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
