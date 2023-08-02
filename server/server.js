
let express = require('express');
const problemToSolve = require('./problemToSolve');
let app = express();
const port = 5001;

app.use(express.json());




app.use(express.static('server/public'));


app.listen(port, function() {
  console.log('listening on port', port);
})

app.get('/equation', function(req, res){
  console.log('Request for /quotes was made');

  res.send(problemToSolve)
})


app.post('/equation', (req, res) => {
  console.log('get a POST request /equation', req.body);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let operator = req.body.operator;
  let answer;

  switch(operator){
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2; 
      break;
    case '/':
      answer = num1 / num2;     
  }
  console.log(answer);
  
  // let equation = req.body
  problemToSolve.push({
    num1: num1,
    num2: num2,
    operator: operator,
    answer: answer
  
})
console.log(problemToSolve);
res.sendStatus(201);
});
// let result;

// if (operator === '+') {
//     result = num1 + num2;
// } else if (operator === '-') {
//     result = num1 - num2;
// } else if (operator === '*') {
//     result = num1 * num2;
// } else {
//     result = num1 / num2;
// }console.log(result);