var fs = require("fs");
var colors = require("colors");

var StatMode = require("stat-mode");

// fs.stat("./cat.jpg", function(err, stats) {
//   var statMode = new StatMode(stats);
//   console.log(statMode.toString());
// });

// fs.readFile("./text.txt", "utf-8", function(err, data) {
//   console.log("Dane przed zapisem!".blue);
//   console.log(data);
//   fs.appendFile("./text.txt", "\nA tak wyglądają po zapisie!", function(err) {
//     if (err) throw err;
//     console.log("Zapisano!".red);
//     fs.readFile("./text.txt", "utf-8", function(err, data) {
//       console.log("Dane po zapisie".blue);
//       console.log(data);
//     });
//   });
// });

fs.readdir("./testsample", function(err, files) {
  console.log("Dane przed zapisem!".blue);
  console.log(files);
  fs.writeFile("./test.txt", files, function(err, data) {
    if (err) throw err;
    console.log("Zapisano!".blue);
    fs.readFile("./test.txt", "utf-8", function(err, data) {
      console.log("Dane po zapisie".blue);
      console.log(data);
    });
  });
});
