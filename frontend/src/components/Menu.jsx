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
      console.error("Error creating menu:", error);
    }
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Create Menu</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Menu Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Menu Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Menu
        </button>
      </form>
    </div>
  );
};

export default Menu;
