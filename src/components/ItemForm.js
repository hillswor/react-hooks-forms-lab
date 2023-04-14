import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: "",
    category: "Produce",
  });

  const handleChange = (event) => {
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  };

  const { name, category } = newItem;

  const handleSubmit = (event) => {
    event.preventDefault();
    onItemFormSubmit(newItem);

    setNewItem({
      id: uuid(),
      name: "",
      category: "Produce",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" value={name} />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category" value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
