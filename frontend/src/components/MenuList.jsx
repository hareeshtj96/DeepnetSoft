import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuList = ({ onSelect }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/menu");
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching Menu:", error);
      }
    };
    fetchMenu();
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Menu</h2>
      <ul className="space-y-4 mt-4">
        {menu.map((item) => (
          <li
            key={item.id}
            className="border p-4 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => onSelect(item.id)}
          >
            <h3 className="font-semibold">{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
