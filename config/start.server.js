const express = require('express');
const app = express();
const connectDB = require("./db");

const startServer = async (app) => {
    try {
        await connectDB();
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {console.log(`Server is Running on Port: ${PORT}`)});
    } catch (err) {
        console.log(`Server Can't Run on Port: ${PORT} => `, err.message);
    }
}

module.exports = startServer;