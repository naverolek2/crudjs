const express = require("express");
const app = express();
const db = require('./db')

app.get("/", async (req, res) => {
    res.send("dZiała");
});

app.get("/listAll", async (req, res) => {
    res.write("<h1>Lista wszystkich rekordow w bazie </h1>");
    const client = await db.connect();
    res.write("<table>");
    let list = await db.getAllListing(client);
    list.forEach(element => {
        res.write("<tr>");
        res.write("<td>" + element.name + "</td>" + "<td>"+ element.name +"</td>")
    });
    res.write("</table>")
    //res.write(list);
    db.close(client);
    res.end();
})




app.listen(8000);
