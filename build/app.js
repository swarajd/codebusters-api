"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send("Hello world!");
});
var port = Number(process.env.PORT) || 3000;
app.listen(port, function () {
    console.log("example app listening on port " + port);
});
