var fs = require('fs');

function count(lines) {
  return lines.split('\n').length - 1;
}

function linesFrom(file) {
  return fs.readFileSync(file, 'utf8');
}

var file = process.argv[2];
var numberOfLines = count(linesFrom(file));

console.log(numberOfLines);
