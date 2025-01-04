import { FaTrash } from "react-icons/fa6";

const Delete = () => {
  return (
    <button className="text-red-500 hover:text-red-600">
      <FaTrash className="size-4" />
    </button>
  );
};

export default Delete;
