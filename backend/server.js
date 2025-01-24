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


const corsOptions = {
    origin: 'https://glittering-khapse-95e700.netlify.app',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
};

//middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api/menu", menuRoutes)

app.listen(PORT, () => {
    checkDataBase();
    console.log(`Server is running on port ${PORT}`)
})