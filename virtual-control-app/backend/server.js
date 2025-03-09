const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve React build files
app.use(express.static(path.join(__dirname, "../frontend/build")));

// API Route
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Express backend!" });
});

// Serve React app for all unknown routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});