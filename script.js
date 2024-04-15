document.getElementById("A1").addEventListener("click", function() {
    calculate("+");
});

document.getElementById("A2").addEventListener("click", function() {
    calculate("-");
});

document.getElementById("A3").addEventListener("click", function() {
    calculate("*");
});

document.getElementById("A4").addEventListener("click", function() {
    calculate("/");
});

function calculate(operator) {
    var num1 = parseFloat(document.getElementById("Y79").value);
    var num2 = parseFloat(document.getElementById("Y78").value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both input fields.");
        return;
    }

    switch(operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator.");
            return;
    }

    document.getElementById("J12").value = result;
}