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
  textarea,
  type,
}) => {
  const inputRef = useRef(null);

  const handleBlur = (e) => {
    onSave(fieldKey, e.target.value);
  };

  return (
    <div className="flex items-center mb-2">
      {isEditing ? (
        <div className="flex gap-2">
          {textarea && (
            <textarea
              type="text"
              ref={inputRef}
              defaultValue={value}
              onBlur={handleBlur}
              className="border outline-primary rounded px-2 py-1 w-96 h-96"
              autoFocus
            />
          )}

          {!textarea && type === "number" ? (
            <input
              type="number"
              ref={inputRef}
              min={1}
              defaultValue={value}
              onBlur={handleBlur}
              className="border outline-primary rounded px-2 py-1 w-32"
              autoFocus
            />
          ) : (
            <input
              type="text"
              ref={inputRef}
              defaultValue={value}
              onBlur={handleBlur}
              className="border outline-primary rounded px-2 py-1 w-32"
              autoFocus
            />
          )}

          <button
            className="flex max-h-10 items-center gap-2 px-4 py-1 bg-primary text-white rounded-lg hover:brightness-90 top-4 right-4"
            onClick={() => onSave(fieldKey, inputRef.current.value)}
          >
            <FaSave /> <span>Save</span>
          </button>
        </div>
      ) : (
        <>
          {children}
          <button onClick={() => onEdit(fieldKey)}>
            <FaPencilAlt className="text-gray-400 size-4 ml-3 cursor-pointer text-sm hover:scale-110 transition-all" />
          </button>
        </>
      )}
    </div>
  );
};

export default EditableField;
