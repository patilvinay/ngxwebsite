var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
var app = express();
let PORT = 3001;
const StaticDir = path.join(__dirname, "public")
console.log("Serving static pages on port:", PORT);
console.log("Serving Dir :", StaticDir);
app.use(serveStatic(StaticDir));
app.listen(PORT);