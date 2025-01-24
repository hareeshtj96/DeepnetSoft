import React from "react";
import Menu from "./Menu";

const MenuModal = ({ showMenu, onClose, onAddMenu }) => {
  if (!showMenu) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 max-h-[90vh] overflow-y-auto">
        <Menu onAddMenu={onAddMenu} />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-4 w-full sm:w-auto"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MenuModal;
