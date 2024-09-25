// Definimos la función
function esPar(numero) {
    if (numero % 2 === 0) {
        alert(`${numero} es par.`); // Usa comillas invertidas
        return true; // Devuelve true si el número es par
    } else {
        alert(`${numero} es impar.`); // Usa comillas invertidas
        return false; // Devuelve false si el número es impar
    }
}

// Probamos la función con diferentes números
const numero1 = 4;
const numero2 = 7;
const numero3 = 10;
const numero4 = 15;

esPar(numero1); // Debería mostrar "4 es par."
esPar(numero2); // Debería mostrar "7 es impar."
esPar(numero3); // Debería mostrar "10 es par."
esPar(numero4); // Debería mostrar "15 es impar."
