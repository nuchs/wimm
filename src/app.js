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

app.get("/", (_, res) => res.send(templates.execute("home")));
Configuration(app, "config");
app.get("/history", (_, res) => res.send(templates.execute("history")));
app.get("/transaction", (_, res) => res.send(templates.execute("transaction")));

app.listen(port, () => console.log(`Hello from Wimm on port ${port}!`));

// -------------------------------------------------------------------------------

const segments = [
  { id: 1, name: "Mortgage", colour: "red", hits: 0 },
  { id: 2, name: "Household Bills", colour: "blue", hits: 1 },
  { id: 3, name: "Car", colour: "green", hits: 3 },
];

function get(_, res) {
  const page = templates.execute("config", segments);
  res.send(page);
}

function patchSegment(req, res) {
  const newName = req.body["segment-name"];
  const target = Number(req.body.id);
  const segment = segments.find((s) => s.id === target);
  console.log("hmm", segment);
  segment.name = newName;
  const row = `
        <td> 
          <input 
            type="text" 
            name="segment-name"
            value="${newName}"
            hx-trigger="change" 
            hx-patch="/config/segment"
            hx-vals="id=${segment.id}"
            hx-target="#segment-${segment.id}">
        </td>
        <td>${segment.colour}</td>
        <td>${segment.hits}</td>
`;

  res.send(row);
}

function Configuration(app, root) {
  app.get(`/${root}`, get);
  app.patch(`/${root}/segment`, patchSegment);
}
