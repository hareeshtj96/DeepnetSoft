const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const menuRoutes = require('./routes/menuRoutes');
const dotenv = require("dotenv");
const checkDataBase = require("./db/db");

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/api/menu", menuRoutes)

app.listen(PORT, () => {
    checkDataBase();
    console.log(`Server is running on port ${PORT}`)
})