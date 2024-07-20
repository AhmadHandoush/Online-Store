function Delete({ deleteUser, setUserId, setShowDelete, userId }) {
  return (
    <div
      className="bg-gray-500 p-4 rounded absolute flex flex-col gap-2"
      style={{ top: "40px", right: "0", width: "auto", zIndex: "9999" }}
    >
      <p className="text-white">Are you sure you want to delete this user?</p>
      <div className="flex gap-2">
        <button
          className="p-2 rounded bg-black text-white"
          onClick={() => {
            setUserId(null);
            setShowDelete(false);
          }}
        >
          No
        </button>
        <button
          className="p-2 rounded bg-red-500 text-white hover:opacity-80"
          onClick={() => deleteUser(userId)}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default Delete;
