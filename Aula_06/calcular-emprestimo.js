
//VARIÁVEIS
let valorEmprestimo = 1000;
const emprestimoMaisJuros = valorEmprestimo + (valorEmprestimo*20)/100;
let qtdeParcelas = 10;
const quantoVaiPagar = emprestimoMaisJuros/qtdeParcelas;

//FUNÇÃO
function calcularParcela() {
    return(`Seu empréstimo de R$${(valorEmprestimo.toFixed(2))} com o acréscimo de 20% de juros totalizará em ${qtdeParcelas} parcelas de R$${(quantoVaiPagar.toFixed(2))}`);
}

//IMPRIMIR RESULTADO
console.log(calcularParcela());