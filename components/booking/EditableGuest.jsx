"use client";

import { useEffect, useRef } from "react";

const EditableGuest = ({ onGuest, guestsNum }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex items-center mb-2">
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => onGuest(e.target.value)}
        value={guestsNum}
        className="border outline-primary rounded px-2 py-1 w-32"
      />
    </div>
  );
};

export default EditableGuest;
