import { useState } from "react";

function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [itemName, setItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;

    const newItem = { itemName, quantity, checked: false, id: Date.now() };

    onAddItem(newItem);
    setItemName("");
    setQuantity(1);
  }

  return (
    <form
      className="flex justify-center gap-5 py-2.5 text-white"
      onSubmit={handleSubmit}
    >
      <select
        className="bg-accent border-2 border-white outline-white rounded-lg p-1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className="border-2 border-white outline-white text-white py-1 px-3 rounded-lg bg-accent"
        type="text"
        placeholder="E.g., Appels, Bread, Milk..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button
        className="px-5 py-1 bg-accent rounded-lg border-2 outline-white hover:bg-accent/80 cursor-pointer"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
