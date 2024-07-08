import { useContext, useState } from "react";
import { StateContext } from "../../../../../contexts/StateContext";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { BASE_URL } from "../../../../../utils/Constants";

function AddOne({ type }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);
  const { setMessage } = useContext(StateContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/${type}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to Add ${type}`);
      }
      const data = await response.json();
      setMessage(data.message);
      setName("");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-end mt-4 ">
      <form
        className="border border-primary p-3 rounded column  "
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-center mb-3">Add {type} </h1>
        <div className="flex gap-2 flex-1">
          <input
            type="text"
            placeholder="Enter Item Name"
            className="border border-gray-300 rounded p-2 focus:oultine-none focus:border-primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 rounded flex-center bg-primary text-white"
          >
            {loading ? "Adding... " : "Add"}{" "}
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">!{error}</p>}
      </form>
    </div>
  );
}

export default AddOne;
