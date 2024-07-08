function Delete({ message, id, notDelete, deletee, loading, error, setError }) {
  return (
    <div
      className="absolute  flex column gap-2 p-2 bg-gray-500 rounded"
      style={{ top: "-70px", right: "0", width: "230px" }}
    >
      <p className="text-white lowercase"> {message}</p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            notDelete();
            if (error) setError("");
          }}
          className="p-1 flex-center bg-white rounded font-bold hover:opacity-50"
        >
          No
        </button>
        <button
          className="p-1 flex-center bg-red-500 rounded font-bold hover:opacity-50"
          onClick={() => deletee(id)}
        >
          {loading ? "deleting..." : "yes"}
        </button>
      </div>
      {error && <p className="text-red-800 lowercase">!{error} </p>}
    </div>
  );
}

export default Delete;
