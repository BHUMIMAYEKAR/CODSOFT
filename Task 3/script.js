let display = document.getElementById("display");
let input = "";

function press(value) {
   if ("+-/".includes(value) && "+-/".includes(input.slice(-1))) {
    input = input.slice(0, -1) + value;
  } else {
    input += value;
  }
  display.innerText = input;
}

function clearDisplay() {
  input = "";
  display.innerText = "0";
}

function calculate() {
  try {
       if (input) {
      let result = eval(input);
      display.innerText = result;
      input = result.toString();     }
  } catch (err) {
    display.innerText = "Error";
    input = "";
  }
}