let display = document.getElementById("display");

//a global variable to hold the last result
var result = 0;
//a global variable to hold the last input
var input = 0;
var inputString = "";
var needInput = false;
var is_ac = true;

function setInput(num) {
  inputString += num;
  display.value = inputString;
  input = parseInt(inputString); //for converting a string to number
  needInput = false;
}

function add() {
  if (needInput) return;

  inputString = "";
  if (result == 0) {
    display.value = inputString;
  } //it means the result is empty
  result += input;
  display.value = result;
  needInput = true;
}

function substract() {
  if (needInput) return;

  inputString = "";
  if (is_ac) {
    display.value = inputString;
    result = input;
    is_ac = false;
    return;
  }
  result -= input;
  display.value = result;
  needInput = true;
}

function divide() {
  if (needInput) return;
  inputString = "";
  if (result == 0) {
    display.value = inputString;
  }
  result /= input;
  display.value = result;
  needInput = true;
}

function multiply() {
  if (needInput) return;
  inputString = "";
  if (result == 0) {
    display.value = inputString;
  }
  result *= input;
  display.value = result;
  needInput = true;
}

//برای نشون دادن اعداد و عملگراها
function appendToDisplay(value) {
  display.value += value;
}

//پاک کردن نوشته ها
function ac() {
  inputString = '';
  result = 0;
  display.value = '';
  is_ac = true;
}

function calculateResult() {
  //TODO: implement this
}
