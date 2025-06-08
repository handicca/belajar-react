import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "itemName") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.itemName.localeCompare(b.itemName));
  }

  if (sortBy === "checked") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));
  }

  return (
    <div className="flex-1 flex flex-col items-center py-8">
      <ul className="grid grid-cols-4 gap-10">
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="mt-auto">
        <select className="bg-accent p-2 border-white border-2 outline-white text-white rounded-lg" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="itemName">sort by name</option>
          <option value="checked">Sort by status</option>
        </select>
        <button className="ml-5 px-2.5 py-2 rounded-lg border-white outline-white cursor-pointer hover:bg-accent/80 text-white border-2 bg-accent" onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default ShoppingList;
