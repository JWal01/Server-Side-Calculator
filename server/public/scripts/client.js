console.log("Script Running");

function getEquation(){
  axios.get('/numbers').then((response) => {
    console.log("success" , response);
    let equationFromServer =  response.data 
    renderToDom(equationFromServer)
  }).catch((error) => {
    console.log(error);
    alert("Something went Wrong")
  })

}

function renderToDom(equations){
  let outputList = document.querySelector('#equation')
  outputList.innerHTML = ''
  for(let equation of equations){
    outputList.innerHTML += `
    <p> ${equation.num1} - ${equation.operator} - ${equation.num2} </p>
    `
  }
}




function submitForm(event){
  event.preventDefault();
  let num1 = document.querySelector('#num1').value
  let operator = document.querySelector('#operator').value
  let num2 = document.querySelector('#num2').value

  let equation = {
    Number1: num1,
    Operator: operator,
    Number2: num2
  }
  console.log(equation);

  axios.post('/numbers', equation).then((response) => {
    console.log(response);
    document.querySelector('#num1').value = '';
    document.querySelector('#operator').value = '';
    document.querySelector('#num2').value = '';
    getEquation();

  }) .catch((error) => {
    console.log(error);
    alert('Something Went Wrong')
  })
}