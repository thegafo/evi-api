
const readline = require('readline');
const queryEvi = require('./evi');
var rl;

var getInput = function () {
  rl = rl || readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('query evi: ', (input) => {
    if (input) {
      queryEvi(input).then((result) => {
        console.log(result);
        getInput();
      }).catch(console.error);
    } else {
      getInput();
    }
  });
}

getInput();
