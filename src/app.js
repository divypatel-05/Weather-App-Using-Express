const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;


const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
const staticPath = path.join(__dirname, "../public");

app.set('view engine', 'hbs');
app.set("views",templatePath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("*", (req, res) => {
    res.render("error", {
        errorMsg : "Oops Page Not Found"
    });
});

app.listen(port, () => {
    console.log(`Listening to port number ${port}`);
});