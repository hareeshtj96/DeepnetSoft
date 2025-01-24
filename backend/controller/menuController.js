const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Creating a new menu
const createMenu = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newMenu = await prisma.menu.create({
            data: {
                name,
                description
            }
        });
        res.status(201).json(newMenu);
    } catch (error) {
        console.error("Error creating menu:", error.message);
        res.status(500).json({ error: "Failed to create menu" })
    }

}

// Get all menus
const getMenus = async (req, res) => {
    try {
        const menus = await prisma.menu.findMany({
            include: {
                items: true,
            }
        });
        res.status(200).json(menus);
    } catch (error) {
        console.error("Error fetching menus:", error.message);
        res.status(500).json({ error: "Failed to fetch menus" })
    }
}

// Get menu by id
const getMenuById = async (req, res) => {
    const { id } = req.params;
    try {
        const menu = await prisma.menu.findUnique({
            where: { id },
            include: {
                items: true,
            }
        });
        if (!menu) {
            return res.status(404).json({ error: "Menu not found" })
        }
        res.status(200).json(menu);
    } catch (error) {
        console.error("Error fetching menu:", error.message);
        res.status(500).json({ error: "Failed to fetch menu" })
    }
}

// Adding item to a menu
const addMenuItem = async (req, res) => {
    const { menuId } = req.params;
    const { name, description, price } = req.body;
    try {
        const newItem = await prisma.menuItem.create({
            data: {
                name,
                description,
                price,
                menuId
            }
        });
        res.status(201).json(newItem);
    } catch (error) {
        console.error("Error adding menu item:", error.message);
        res.status(500).json({ error: "Failed to add menu Item" })
    }
}

module.exports = {
    createMenu,
    getMenus,
    getMenuById,
    addMenuItem
}