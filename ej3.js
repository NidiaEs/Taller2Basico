const corrales = [
    ['oveja', 'oveja', '', 'oveja', ''],
    ['oveja', 'oveja', 'oveja', 'oveja', ''],
    ['oveja', 'muerta', 'lobo', '', 'muerta']
];

// Función para contar las ovejas vivas
function contarOvejasVivas(corrales) {
    let ovejasVivas = 0;
    corrales.forEach(corral => {
        corral.forEach(animal => {
            if (animal === 'oveja') {
                ovejasVivas++;
            }
        });
    });
    return ovejasVivas;
}

// Función para contar los espacios libres
function contarEspaciosLibres(corrales) {
    let espaciosLibres = 0;
    corrales.forEach(corral => {
        corral.forEach(animal => {
            if (animal === '' || animal === 'muerta') {
                espaciosLibres++;
            }
        });
    });
    return espaciosLibres;
}

// Función para neutralizar al lobo
function neutralizarLobo(corrales) {
    corrales.forEach(corral => {
        const indiceLobo = corral.indexOf('lobo');
        if (indiceLobo !== -1) {
            corral[indiceLobo] = ''; // Eliminar al lobo
        }
    });
}

// Función para incorporar nuevas ovejas
function incorporarNuevasOvejas(corrales, cantidadLobos) {
    const cantidadNuevasOvejas = cantidadLobos * 2;
    let corralIndex = 0;
    for (let i = 0; i < cantidadNuevasOvejas; i++) {
        while (corrales[corralIndex].includes('muerta') || corrales[corralIndex].includes('lobo')) {
            corralIndex = (corralIndex + 1) % corrales.length;
        }
        const indiceEspacioLibre = corrales[corralIndex].indexOf('');
        corrales[corralIndex][indiceEspacioLibre] = 'oveja';
    }
}

// Ejecutamos las funciones y mostramos los resultados
console.log("Ovejas vivas:", contarOvejasVivas(corrales));
console.log("Espacios libres:", contarEspaciosLibres(corrales));
neutralizarLobo(corrales);
console.log("Después de neutralizar al lobo:");
console.log(corrales);
incorporarNuevasOvejas(corrales, 1); // Supongamos que hay 1 lobo
console.log("Después de incorporar nuevas ovejas:");
console.log(corrales);
