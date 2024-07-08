import { useContext, useState } from "react";
import { BASE_URL } from "../../../../../utils/Constants";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { StateContext } from "../../../../../contexts/StateContext";

function Edit({ item, setShowUpdate, type, setCategoryId }) {
  const [name, setName] = useState(item.name || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);
  const { setMessage, setOverlay } = useContext(StateContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/${type}/update/${item._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to update ${type} `);
      }

      const data = await response.json();
      setShowUpdate(false);
      setOverlay(false);
      setMessage(data.message);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => {
    setOverlay(false);
    setShowUpdate(false);
    setCategoryId(null);
  };

  return (
    <div
      className="absolute bg-white rounded  "
      style={{
        top: "-70px",
        right: "0",
        width: "auto",
        zIndex: "2000",
        height: "50px",
      }}
    >
      <div className=" relative p-2 pt-3">
        <span
          className="absolute flex-center p-2 rounded-full flex-center bg-primary text-white cursor-pointer w-5 h-5 font-bold"
          style={{ top: "-10px", right: "-10px" }}
          onClick={() => handleClose()}
        >
          X
        </span>
        <form className="flex gap-2 " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your updated name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Edit name"
            required
          />
          <button
            type="submit"
            className="p-2 bg-primary font-bold text-white rounded"
          >
            {loading ? "Updating..." : "Save"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-1">! {error}</p>}
      </div>
    </div>
  );
}

export default Edit;
