function calculate(operation, resultElement) {
    // Get the two numbers from the input elements.
    var bil1 = parseFloat(document.getElementById('bilangan1').value);
    var bil2 = parseFloat(document.getElementById('bilangan2').value);

    // Check if the inputs are valid numbers
    if (isNaN(bil1) || isNaN(bil2)) {
      resultElement.textContent = "Invalid input";
      return;
    }

    // Perform the specified operation.
    var result;
    switch (operation) {
      case "+":
        result = bil1 + bil2;
        break;
      case "-":
        result = bil1 - bil2;
        break;
      case "*":
        result = bil1 * bil2;
        break;
      case "/":
        if (bil2 === 0) {
          resultElement.textContent = "Cannot divide by zero";
          return;
        }
        result = bil1 / bil2;
        break;
      default:
        result = "Invalid operation";
    }

    // Update the result element.
    resultElement.textContent = result;
  }