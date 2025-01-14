"use client";

import { useRef } from "react";
import { FaPencilAlt, FaSave } from "react-icons/fa";

const EditableField = ({
  children,
  fieldKey,
  value,
  isEditing,
  onEdit,
  onSave,
  textarea = false,
  type = "text",
}) => {
  const inputRef = useRef(null);

  const handleSaveClick = () => {
    if (inputRef.current) onSave(fieldKey, inputRef.current.value);
  };

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <div className="flex items-center gap-2">
          {textarea ? (
            <textarea
              ref={inputRef}
              defaultValue={value}
              rows={4}
              className="border rounded px-2 py-1 w-96"
              autoFocus
            />
          ) : (
            <input
              ref={inputRef}
              type={type}
              defaultValue={value}
              className="border rounded px-2 py-1 w-32"
              autoFocus
            />
          )}
          <button
            onClick={handleSaveClick}
            className="flex items-center gap-2 px-4 py-1 bg-primary text-white rounded-lg hover:brightness-90"
          >
            <FaSave /> Save
          </button>
        </div>
      ) : (
        <>
          {children}
          <button onClick={() => onEdit(fieldKey)} className="ml-3">
            <FaPencilAlt className="text-gray-400 hover:scale-110 transition-transform" />
          </button>
        </>
      )}
    </div>
  );
};

export default EditableField;
