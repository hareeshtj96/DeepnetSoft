const express = require("express");
const router = express.Router();
const menuController = require("../controller/menuController");

// setting up routes
router.post("/", menuController.createMenu)
router.get("/", menuController.getMenus);
router.get("/:id", menuController.getMenuById);
router.post("/:menuId/items", menuController.addMenuItem);

module.exports = router;