function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var operator = document.getElementById("operator").value;
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultElement = document.getElementById("result");
    var errorElement = document.getElementById("error");

    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = "Angka pertama dan kedua harus diisi.";
        resultElement.textContent = "";
    } else {
        errorElement.textContent = "";

        switch (operator) {
            case "+":
                resultElement.textContent = num1 + num2;
                break;
            case "-":
                resultElement.textContent = num1 - num2;
                break;
            case "*":
                resultElement.textContent = num1 * num2;
                break;
            case "/":
                if (num2 !== 0) {
                    resultElement.textContent = num1 / num2;
                } else {
                    errorElement.textContent = "Pembagian dengan nol tidak diizinkan.";
                    resultElement.textContent = "";
                }
                break;
            default:
                errorElement.textContent = "Operator yang diizinkan adalah +, -, *, atau /.";
                resultElement.textContent = "";
                break;
        }
    }
}