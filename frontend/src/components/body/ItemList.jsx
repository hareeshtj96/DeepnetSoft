import React from "react";

const ItemList = ({ menuItems = [] }) => {
  return (
    <div>
      {menuItems.length > 0 ? (
        <div className="mt-4 text-white bg-black sm:p-6 md:p-8 rounded-lg shadow-lg">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="p-4 border-b border-gray-600 last:border-0"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                  <h4 className="font-bold text-xl sm:text-2xl">{item.name}</h4>
                  <div className="flex-grow mx-2">
                    <hr className="border-dotted border-gray-500" />
                  </div>
                  <p className="text-lg text-yellow-400 mt-2 sm:mt-0">
                    ${item.price}
                  </p>
                </div>
                <p className="text-sm text-gray-300 mt-2">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-white">No items in this menu yet</p>
      )}
    </div>
  );
};

export default ItemList;
