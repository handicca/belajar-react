import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearList() {
    if (!items.length) {
      return window.alert("You dont have any items!");
    }

    const confirmed = window.confirm("Are you sure want to delete all items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="font-inter h-screen bg-secondary flex flex-col">
      <Header />
      <Form onAddItem={handleAddItem} />
      <ShoppingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Footer />
    </div>
  );
}

export default App;
