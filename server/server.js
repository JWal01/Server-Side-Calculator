
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
  console.log('get a POST request.', req.body);

  let equation = req.body
  problemToSolve.push(equation)
  res.sendStatus(201);
})
