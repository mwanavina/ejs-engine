const path = require("node:path");
const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const links =[
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" }
];

const users = ["Alice", "Bob", "Charlie"];
app.get("/",(req, res) => {
    res.render("index", { links: links, users: users});
});

app.get("/about", (req, res) => {
    res.render("about", { links: links });
});

app.get("/contact", (req, res) => {
    res.render("contact", { links: links });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});