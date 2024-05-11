
//VARIÁVEIS
let preco = 97;
const impsoto = (preco*60)/100;
const precoFinal = preco + impsoto;

//FUNÇÃO PARA CALCULAR O IMPOSTO
function calcularImposto() {
    return(`O imposto do produto cujo preço é R$${preco}, será de R$${(impsoto.toFixed(2))}, totalizando R$${(precoFinal.toFixed(2))}`);
}

//IMPRESSÃO DO RESULTADO
console.log(calcularImposto());