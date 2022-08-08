import React, { useState } from "react";

const GroceryInput = ({ handleAdd }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Enter Grocery Items"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button
        onClick={() => {
          handleAdd(title);
          setTitle("");
        }}
      >
        {" "}
        Add to List{" "}
      </button>
    </div>
  );
};
export default GroceryInput;
