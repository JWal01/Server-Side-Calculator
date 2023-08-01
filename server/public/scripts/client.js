console.log("Script Running");

let operator;









function getEquation(){
  axios.get('/equation').then((response) => {
    console.log("success" , response);
    let equationFromServer =  response.data 
    renderToDom(equationFromServer)
  }).catch((error) => {
    console.log(error);
    alert("Something went Wrong")
  })

}

// function renderToDom(equations){
//   let outputList = document.querySelector('#equation')
//   outputList.innerHTML = ''
//   for(let equation of equations){
//     outputList.innerHTML += `
//     <p> ${equation.num1} - ${equation.operator} - ${equation.num2} </p>
//     `
//   }
// }






function operatorGet(){
  console.log("operatorClicked");
  let operator = document.getElementById("operator");
  console.log(operator.value);
}

function submitProblem(event){
  // event.preventDefault();
  let num1 = document.querySelector('#num1').value;
  let num2 = document.querySelector('#num2').value;
  let operator = document.getElementById("operator");

  let problemToSolve = {
    num1: num1,
    num2: num2,
    operator: operator.value
  }
  console.log(problemToSolve);

  axios.post('/equation', problemToSolve).then((response) => {
    console.log(response);
    document.querySelector('#num1').value = '';
    document.querySelector('#num2').value = '';

    // getQuotes();

  }) .catch((error) => {
    console.log(error);
    alert('Something Went Wrong')
  })
}




//   let num1 = document.querySelector('#num1').value
//   let operator = document.querySelector('#operator').value
//   let num2 = document.querySelector('#num2').value

//   let equation = {
//     num1: num1,
//     num2: num2,
//     operator: operator
//   }
//   console.log(equation);

//   axios.post('/numbers', equation).then((response) => {
//     console.log(response);
//     document.querySelector('#num1').value = '';
//     document.querySelector('#operator').value = '';
//     document.querySelector('#num2').value = '';
//     getEquation();

//   }) .catch((error) => {
//     console.log(error);
//     alert('Something Went Wrong')
//   })
// }