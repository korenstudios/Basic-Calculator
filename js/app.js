const result = document.getElementById("result");
const clear = document.getElementById("clear");
const operators = document.getElementsByClassName("operators");
const numbers = document.getElementsByClassName("numbers");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");

// Clear Calculator
clear.addEventListener("click", () => (result.value = ""));

// Check the operation and set the value type
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {
    // If there is no value set empty string
    if (!result.value) {
      result.value = "";
      return;
    }

    // operations list
    const operations = ["+", "-", "*", "/"];

    // Check what was the last char
    const lastChar = result.value.slice(-1);

    // If last char was a different operatorstion, replace it with new one
    if (e.target.value !== lastChar) {
      if (operations.indexOf(lastChar) !== -1) {
        let changedVal = result.value.slice(0, -1);
        changedVal = changedVal + e.target.value;
        result.value = changedVal;
        return;
      }
    }

    switch (lastChar) {
      case "+":
        return;
      case "-":
        return;
      case "*":
        return;
      case "/":
        return;
    }

    result.value += e.target.value;
  });
}

// Check the number and set the value
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    result.value += numbers[i].value;
  });
}

// Add dot for float number
dot.addEventListener("click", () => (result.value += dot.value));

// Define calculation equalization
equal.addEventListener("click", () => {
  // If there is no value set empty string
  if (!result.value) {
    result.value = "";
    return;
  }

  // If success show the result, otherwise (failure) show an error
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Syntax ERROR";
  }
});
