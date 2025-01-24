import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Menu = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/menu", {
        name,
        description,
      });
      toast.success("Menu created successfully!");
      setName("");
      setDescription("");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || "Failed to create menu");
      } else {
        toast.error("Network error. Please try again later.");
      }
    }
  };
  return (
    <div className="p-4 bg-white sm:p-6 lg:p-8 max-w-xl mx-auto rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Menu Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-black text-sm sm:text-base"
          required
        />
        <textarea
          placeholder="Menu Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-3 w-full rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-black text-sm sm:text-base"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md w-full transition duration-300 text-sm sm:text-base"
        >
          Create Menu
        </button>
      </form>
    </div>
  );
};

export default Menu;
