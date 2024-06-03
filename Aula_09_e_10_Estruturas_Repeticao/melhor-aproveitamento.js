const notas = [7, 4, 8, 5, 6];

function encontrarNotaMaisAlta(notas) {
    if (notas.length === 0) {
        return null;
    }

    let notaMaisAlta = notas[0];

    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > notaMaisAlta) {
            notaMaisAlta = notas[i];
        }
    }

    return notaMaisAlta;
}

const notaMaisAlta = encontrarNotaMaisAlta(notas);

if (notaMaisAlta !== null) {
    console.log(`A nota mais alta é: ${notaMaisAlta}.`);
} else {
    console.log("A lista de notas está vazia.")
}