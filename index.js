const express = require("express");
const app = express();


app.get("/", async (req, res) => {
    res.send("dZiała");
});

app.get("/listAll", async (req, res) => {
    res.header("200");
    res.write("<h1>Lista wszystkich rekordów w bazie </h1>");
    res.end();
})



app.listen(8000);
