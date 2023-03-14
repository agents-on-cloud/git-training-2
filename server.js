const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.send("Hello World");
        const {x, y} = req.query;
        const power = x**y;
        res.send(200, power);
});

app.listen(8000, (req, res) => {
    console.log("Server connected on port 8000");
});
