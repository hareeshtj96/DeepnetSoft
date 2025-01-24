import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuDetails = ({ menuId }) => {
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    const fetchMenuDetail = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/menu/${menuId}`
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
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
        Menu Items
      </h2>
      <ul className="space-y-4">
        {menuItem.map((item) => (
          <li key={item.id} className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg sm:text-xl text-black">
              {item.name}
            </h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <p className="text-green-600 font-semibold text-lg mt-2">
              {item.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDetails;
