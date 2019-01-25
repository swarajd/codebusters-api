import express = require("express");
import bodyParser = require("body-parser");
import engine from "./engine";

const app: express.Application = express();

app.use(bodyParser.json());

app.get("/", function(_, res) {
  res.send("Hello world!");
});

app.post("/", function(req, res) {
  const questionSpec = req.body;
  res.send(engine(questionSpec));
});

let port: number = Number(process.env.PORT) || 3000;

app.listen(port, function() {
  console.log(`example app listening on port ${port}`);
});
