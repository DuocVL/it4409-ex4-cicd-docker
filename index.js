const express = require("express");
const app = express();

app.get("/", async (req, res) => {
    res.status(200).send("Xin chào bạn");
});

// Start server
app.listen(3000, () => {
    console.log("Server chay o http://localhost:3000");
});