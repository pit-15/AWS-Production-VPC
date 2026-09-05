import express from "express";
import os from "os";
import dotenv from "dotenv"
dotenv.config()

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.json({
        message: "Hello!",
        hostname: os.hostname()
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        nodeVersion: process.version
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});