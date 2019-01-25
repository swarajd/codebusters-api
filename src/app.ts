import express = require('express');

const app: express.Application = express();

app.get('/', function(req, res) {
    res.send("Hello world!");
})

let port: number = Number(process.env.PORT) || 3000;

app.listen(port, function() {
    console.log(`example app listening on port ${port}`);
})