const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home", {
		nombre: "JSamuel",
		titulo: "Curdo de Node.js",
	});
});

app.get("/elements", (req, res) => {
	res.render("elements", {
		nombre: "JSamuel",
		titulo: "Curdo de Node.js",
	});
});

app.get("/generic", (req, res) => {
	res.render("generic", {
		nombre: "JSamuel",
		titulo: "Curdo de Node.js",
	});
});

app.get("*", (req, res) => {
	res.render("404", {
		nombre: "JSamuel",
		titulo: "Curdo de Node.js",
	});
});

app.listen(port, () => {
	console.log(`App escuchando en http://localhost:${port}`);
});
