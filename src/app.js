const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Hello from Wimm on port ${port}!`));

process.on("exit", () => {
  console.log("Ok lady, I love you bye bye!");
});
