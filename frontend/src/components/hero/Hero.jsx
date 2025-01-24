import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import MenuModal from "../body/MenuModal";
import ItemList from "../body/ItemList";
import AddItemModal from "../body/AddItemModal";
import MenuList from "../body/MenuList";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [loadingMenus, setLoadingMenus] = useState(true);
  const [loadingItems, setLoadingItems] = useState(false);

  // Fetch Menus when the component loads
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/menu");
        setMenus(response.data);
        setLoadingMenus(false);
      } catch (error) {
        console.error("Error fetching menus:", error);
        setLoadingMenus(false);
      }
    };

    fetchMenus();
  }, []);

  useEffect(() => {
    if (selectedMenu) {
      setLoadingItems(true);
      axios
        .get(`http://localhost:3000/api/menu/${selectedMenu}/items`)
        .then((response) => {
          setMenuItems(response.data);
          setLoadingItems(false);
        })
        .catch((error) => {
          console.error("Error fetching menu items:", error);
          setLoadingItems(false);
        });
    }
  }, [selectedMenu]);

  const handleAddClick = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleAddMenu = async () => {
    try {
      setShowMenu(false);
      const response = await axios.get("http://localhost:3000/api/menu");
      setMenus(response.data);
    } catch (error) {
      console.error("Error adding menu:", error);
    }
  };

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId);
  };

  const handleAddItemClick = () => {
    if (selectedMenu) {
      setShowAddItem(true);
    } else {
      toast.error("Please select a menu first");
    }
  };

  const handleAddItem = async () => {
    if (!selectedMenu) {
      console.error("No menu selected");
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:3000/api/menu/${selectedMenu}/items`,
        newItem
      );
      toast.success("Item added to Menu Successfully!");

      const updatedItems = await axios.get(
        `http://localhost:3000/api/menu/${selectedMenu}/items`
      );
      console.log("updated:", updatedItems);
      setMenuItems(updatedItems.data);

      setShowAddItem(false);
      setNewItem({ name: "", description: "", price: "" });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || "Failed to create menu");
      } else {
        toast.error("Network error. Please try again later.");
      }
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="relative flex-grow h-auto flex items-center justify-center bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-10 pt-16 pb-16">
        <div className="absolute inset-0 w-full h-full">
          <img src="images/hero.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        </div>

        <div className="relative text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            MENU
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-center">
            <span>
              Please take a look at our menu featuring food, drinks, and brunch.
            </span>
            <br />
            <span>
              If you'd like to place an order, use the{" "}
              <strong>"Order Online"</strong> button located below the menu.
            </span>
          </p>

          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleAddClick}
          >
            Add Menu
          </button>

          <MenuModal
            showMenu={showMenu}
            onClose={handleCloseMenu}
            onAddMenu={handleAddMenu}
          />
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <MenuList
              onSelect={handleMenuClick}
              selectedMenuId={selectedMenu}
            />
          </div>

          {selectedMenu && (
            <button
              className="bg-green-500 text-white px-4 py-1 text-sm rounded-lg hover:bg-green-600 mt-6"
              onClick={handleAddItemClick}
            >
              Add Item to Menu
            </button>
          )}

          {selectedMenu && <ItemList menuItems={menuItems.items} />}

          {/* Add item pop-up */}
          <AddItemModal
            showAddItem={showAddItem}
            onCancel={() => setShowAddItem(false)}
            onAddItem={handleAddItem}
            newItem={newItem}
            setNewItem={setNewItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
