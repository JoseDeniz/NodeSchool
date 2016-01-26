function sumArguments(arguments) {
  var result = 0;
  for (var index = 2; index < arguments.length; index++) {
      result += Number(arguments[index]);
  }
  return result;
}

console.log(sumArguments(process.argv));
