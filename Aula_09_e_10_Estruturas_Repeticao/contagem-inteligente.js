// CONTADOR INTELIGENTE

let valorUm = 0;
let valorDois = 10;

function contaDecrescente() {
    while (valorUm >= valorDois) {
        console.log(`${valorUm}...`);
        valorUm--;
    }
}

function contaCrescente() {
    while (valorUm <= valorDois) {
        console.log(`${valorUm}... `);
        valorUm++;
    }
}

if (valorUm > valorDois) {
    return contaDecrescente();
} else {
    return contaCrescente();
}
