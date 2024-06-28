import express from "express";
import bodyParser from "body-parser";
import favicon from "serve-favicon";
import Registry from "@nuchs/templar";

const templates = new Registry();
templates.load(process.cwd() + "/src/templates/layout.tmpl.js");
templates.load(process.cwd() + "/src/templates/home.tmpl.js");
templates.load(process.cwd() + "/src/templates/history.tmpl.js");
templates.load(process.cwd() + "/src/templates/config.tmpl.js");
templates.load(process.cwd() + "/src/templates/transaction.tmpl.js");

const app = express();
const port = 3000;

app.use(favicon(process.cwd() + "/public/favicon.ico"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send(templates.execute("home")));
app.get("/history", (req, res) => res.send(templates.execute("history")));
app.get("/config", (req, res) => res.send(templates.execute("config")));
app.get("/transaction", (req, res) =>
  res.send(templates.execute("transaction")),
);

app.listen(port, () => console.log(`Hello from Wimm on port ${port}!`));
