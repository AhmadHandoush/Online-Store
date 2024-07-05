import { MdAdd } from "react-icons/md";

function AddButton({ add }) {
  return (
    <button className="py-3 flex items-center justify-center gap-1 bg-primary rounded h-8 px-2">
      <span className="text-white ">Add</span>
      <MdAdd className="size-5 text-white" />
    </button>
  );
}

export default AddButton;
