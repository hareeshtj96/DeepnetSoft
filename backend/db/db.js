const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

async function checkDataBase() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully")
    } catch (error) {
        console.error("Failed to connect to database:", error.message);
        process.exit(1);
    }
}

module.exports = checkDataBase;