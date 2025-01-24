import React from "react";

const AddItemModal = ({
  showAddItem,
  onCancel,
  onAddItem,
  newItem,
  setNewItem,
}) => {
  if (!showAddItem) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
          Add Item to Menu
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded placeholder-gray-400 text-black"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <textarea
            className="w-full px-4 py-2 border rounded placeholder-gray-400 text-black"
            placeholder="Description"
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
          />
          <input
            type="number"
            className="w-full px-4 py-2 border rounded placeholder-gray-400 text-black"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded w-full md:m-auto"
            onClick={onAddItem}
          >
            Add Item
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
