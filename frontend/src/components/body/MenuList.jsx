import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuList = ({ onSelect }) => {
  const [menu, setMenu] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const fetchMenu = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/menu");
      setMenu(response.data);
    } catch (error) {
      console.error("Error fetching Menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleSelect = (id) => {
    setSelectedId(id);
    onSelect(id);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <ul className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-[1200px] mx-auto">
        {menu.map((item) => (
          <li
            key={item.id}
            className={`border p-4 rounded cursor-pointer flex 
              items-center 
              justify-center 
              text-center 
              min-h-[100px]  ${
                selectedId === item.id ? "bg-blue-500 text-white" : ""
              }`}
            onClick={() => handleSelect(item.id)}
          >
            <h3 className="font-semibold text-lg break-words w-full">
              {item.name}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
