require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

// Enable CORS for all origins
app.use(cors({
    origin: ['http://localhost:3000/'], // Allow only this frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed request types
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));




const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
