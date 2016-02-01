var fs = require("fs");

var file = process.argv[2];

fs.readFile(file, 'utf8', function(error, callback) {
    if (!error) printLinesFrom(callback);
});

function printLinesFrom(lines) {
    var numberOfLines = lines.split('\n').length - 1;
    console.log(numberOfLines);
}
