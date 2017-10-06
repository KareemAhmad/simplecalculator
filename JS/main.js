//Inputs and Output (my variables)
var firstNum, secondNum, answer;

//Event Listeners
document.getElementById('add').onclick = addition;
document.getElementById('subtract').onclick = subtraction;
document.getElementById('divide').onclick = division;
document.getElementById('multiply').onclick = multiplication;
//Calculator button functions
function addition(){
//Get value out of imput
  firstNum= document.getElementById('firstNumber').value;
  secondNum= document.getElementById('secondNumber').value;
//Calculate answer
  answer= Number(firstNum) + Number(secondNum);
//Update the DOM
  document.getElementById('solution').innerHTML= answer;
//Clear inputs
  document.getElementById('firstNumber').value = "";
  document.getElementById('secondNumber').value = "";
}
function subtraction(){
  firstNum= document.getElementById('firstNumber').value;
  secondNum= document.getElementById('secondNumber').value;
  answer= Number(firstNum) - Number(secondNum);
  document.getElementById('solution').innerHTML= answer;
  document.getElementById('firstNumber').value = "";
  document.getElementById('secondNumber').value = "";
}
function division(){
  firstNum= document.getElementById('firstNumber').value;
  secondNum= document.getElementById('secondNumber').value;
  answer= Number(firstNum) / Number(secondNum);
  document.getElementById('solution').innerHTML= answer;
  document.getElementById('firstNumber').value = "";
  document.getElementById('secondNumber').value = "";
}
function multiplication(){
  firstNum= document.getElementById('firstNumber').value;
  secondNum= document.getElementById('secondNumber').value;
  answer= Number(firstNum) * Number(secondNum);
  document.getElementById('solution').innerHTML= answer;
  document.getElementById('firstNumber').value = "";
  document.getElementById('secondNumber').value = "";
}
