const path = require("node:path");
const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links =[
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" }
];
app.get("/",(req, res) => {
    res.render("index", { links: links    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});