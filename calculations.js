// Get the display element
const display = document.getElementById("display");

// Four main functions
// 1. Append the values
// 2. Perform the calculation
// 3. Clear the display
// 4. Delete value from the display

// Use input parameter as we pass in a character when we call the function
function appendToDisplay(input) {
  // Access the value from the display and append the user's input
  display.value += input;
}

function clearDisplay() {
  // Access the value from the display and clear the display by assigning an empty string
  display.value = "";
}

function calculate() {
  // Use eval function to take an expression, evaluate it and return a result
  // eval() is like a built in calculator
  // Access the value from the display and evaluate it
  // Implement error handling in cases where the equation may be incomplete
  // First try the calculation
  try {
    display.value = eval(display.value);
  } catch (error) {
    // Otherwise catch any errors if evident
    display.value = "Error";
  }
}

function deleteFromDisplay() {
  // Clear input using DEL button if value is an error or undefined
  if (display.value == "Error" || display.value == "undefined") {
    display.value = "";
  } else {
    // Start from the beginning of the string [0] and remove the last character from the display value [-1]
    display.value = display.value.slice(0, -1);
  }
}
