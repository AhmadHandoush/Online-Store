import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { StateContext } from "../../../../contexts/StateContext";
import { BASE_URL } from "../../../../utils/Constants";
import { FaTrashAlt } from "react-icons/fa";
import Loader from "../../../../components/Loader";

function Contacts() {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [error, setError] = useState("");
  const { setMessage, setOverlay } = useContext(StateContext);
  const getMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/contact`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setMessages(data.messages);
      setFilteredMessages(data.messages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/contact/delete/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Your Network is not ok ");
      }
      const data = await response.json();
      const updatedMessages = messages.filter((msg) => msg._id !== id);
      setFilteredMessages(updatedMessages);
      setMessage(data.message);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMessages();
  }, []);
  return (
    <div className="w-9/10 p-2 m-auto pt-4">
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
              <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary">
                Phone
              </th>
              <th className="px-6 py-3 text-xs font-bold uppercase text-white bg-primary">
                Message
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-white bg-primary">
                Action
              </th>
            </tr>
          </thead>
          {loading ? (
            <Loader />
          ) : (
            <tbody>
              {filteredMessages.map((message, index) => (
                <tr
                  key={message._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-200" : "bg-gray-50"
                  } `}
                >
                  <td className="px-6 py-3 text-xs font-bold uppercase text-center">
                    {index + 1}
                  </td>
                  <td className="px-6 py-3 text-xs font-bold uppercase text-center">
                    {message.name}
                  </td>
                  <td className="px-6 py-3 text-xs font-bold text-center">
                    {message.email}
                  </td>{" "}
                  <td className="px-6 py-3 text-xs font-bold text-center">
                    {message.phone}
                  </td>
                  <td className="px-6 py-3 text-xs font-bold text-center">
                    {message.message}
                  </td>
                  <td className="px-2 py-3 text-xs font-bold uppercase flex-center text-center relative">
                    <button
                      className="bg-red-500 flex-center gap-2 p-2 rounded text-white px-3 hover:opacity-80"
                      onClick={() => {
                        handleDelete(message._id);
                      }}
                    >
                      <span>{loading ? "deleting" : "Delete"}</span>
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

export default Contacts;
