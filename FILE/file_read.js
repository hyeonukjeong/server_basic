var fs = require("fs");

fs.readFile("../MODULE/home.js", "utf-8", function(error, data) {
  console.log("01 readAsync: %s", data);
});

var data = fs.readFileSync("../MODULE/home.js", "utf-8");
console.log("02 readSync: %s", data);
