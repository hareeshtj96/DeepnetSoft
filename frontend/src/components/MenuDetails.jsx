import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuDetails = ({ menuId }) => {
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    const fetchMenuDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/menu/${menuId}`
        );
        setMenuItem(response.data.items);
      } catch (error) {
        console.error("Error fetching menu details:", error);
      }
    };
    if (menuId) {
      fetchMenuDetail();
    }
  }, [menuId]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Menu Items</h2>
      <ul className="space-y-4 mt-4">
        {menuItem.map((item) => (
          <li key={item.id} className="border p-4 rounded">
            <h3 className="font-semibold">{item.name}</h3>
            <p>{item.description}</p>
            <p className="text-green-600 font-semibold">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDetails;
