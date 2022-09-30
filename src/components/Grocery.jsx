import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

const Grocery = () => {
  const [data, setData] = useState([]);

  const handleAdd = (title) => {
    if(title == ''){
      alert('Enter a valid item')
      return
    }
    const groceryItem = {
      title: title,
      id: uuid()
    };
    setData([...data, groceryItem]);
  };

  const handleDelete = (id) => {
    const updateData = data.filter((item) => item.id !== id);
    setData(updateData);
  };
  return (
    <>
      <h1 style={{ color: "blueviolet" }}>Grocery</h1>
      <GroceryInput handleAdd={handleAdd} />
      <h2 style={{ color: "blueviolet" }}>Grocery list</h2>
      <GroceryList data={data} handleDelete={handleDelete} />
    </>
  );
};
export default Grocery;
