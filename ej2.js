const calculator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

function operation(operator, firstValue, secondValue) {
    const operationFunction = calculator[operator];
    if (operationFunction) {
        return operationFunction(firstValue, secondValue);
    } 
}

// Coloca aqui los datos para realizar el ejercicio:
console.log(operation('+', 3, 6));   
console.log(operation('-', 7, 3));   
console.log(operation('*', 9, 9));   
console.log(operation('/', 15, 3));  
