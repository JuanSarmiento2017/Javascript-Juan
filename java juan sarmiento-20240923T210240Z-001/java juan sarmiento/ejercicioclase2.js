//calculadora
let num1 = parseFloat(prompt("Digite el primer número", ""));
let num2 = parseFloat(prompt("Digite el segundo número", ""));
let operacion = prompt("Digite su operación (+, -, *, /)", "");
let resultado;

switch (operacion) {
    case "+":
        resultado = num1 + num2;
        break;

    case "-":
        resultado = num1 - num2;
        break;

    case "*":
        resultado = num1 * num2;
        break;

    case "/":
        if (num2 === 0) {
            resultado = "No se puede dividir por cero";
        } else {
            resultado = num1 / num2;
        }
        break;

    default:
        resultado = "Operación no válida";
}

alert("El resultado es: " + resultado);