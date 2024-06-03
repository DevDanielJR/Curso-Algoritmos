
let numero = 100;

function descobrePrimo (numero) {

    let qtdeDivisor = 0;

    for (let contador = 1; contador <= numero; contador++) {
        if (numero % contador === 0){
            qtdeDivisor ++;
        }
    }

    return qtdeDivisor
}

if (descobrePrimo(numero) > 2) {
    console.log(`${numero} NÃO É PRIMO!`);
} else {
    console.log(`${numero} É PRIMO!`)
}
