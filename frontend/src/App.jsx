import React, { useState } from "react";
import MenuList from "./components/MenuList";
import MenuDetails from "./components/MenuDetails";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const handleSelectMenu = (menuId) => {
    setSelectedMenuId(menuId);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Restaurant Menu</h1>

      <div className="flex gap-8">
        <div className="w-1/3">
          <MenuList onSelect={handleSelectMenu} />
          <Menu />
        </div>

        <div className="w-2/3">
          {selectedMenuId && <MenuDetails menuId={selectedMenuId} />}
        </div>
      </div>
    </div>
  );
}

export default App;
