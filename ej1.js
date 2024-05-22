function caliProm(notas) {
    if (notas.length < 3) {
        return "Se requieren al menos 3 notas para calcular el promedio.";
    }

    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    const promedio = suma / notas.length;

    if (promedio >= 4.8 && promedio <= 5.0) {
        return "E = Excelente";
    } else if (promedio > 4.5 && promedio < 4.7) {
        return "MB = Muy bueno";
    } else if (promedio >= 4.0 && promedio < 4.4) {
        return "B = Bueno";
    } else if (promedio >= 3.5 && promedio < 3.9) {
        return "A = Aprobado";
    } else if (promedio >= 0 && promedio < 3.4) {
        return "R = Reprobado";
    } else {
        return "Las notas deben estar en un rango válido (0-5).";
    }
}

// Coloca aqui las notas para realizar el ejercicio:
const notas = [4.8, 4.8, 4.8];
console.log(caliProm(notas));
