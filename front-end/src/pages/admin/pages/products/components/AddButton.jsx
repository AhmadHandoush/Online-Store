import { MdAdd } from "react-icons/md";

function AddButton({ change }) {
  return (
    <button
      className="flex items-center justify-center  p-1 rounded w-24 "
      style={{
        border: "1px solid #155e75",
        background: "white",
        transition: "background 0.3s, color 0.3s",
        color: "#155e75",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#155e75";
        e.currentTarget.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "white";
        e.currentTarget.style.color = "#155e75";
      }}
      onClick={() => change()}
    >
      <span className="font-bold " style={{ color: "inherit" }}>
        Add
      </span>
      <MdAdd className="size-lg" style={{ color: "inherit" }} />
    </button>
  );
}

export default AddButton;
