
//VARIÁVEIS
let anoAtual = 2024;
let anoNascimento = 2006;
const idade = anoAtual - anoNascimento;

//FUNÇÃO CALCULAR IDADE
function calcularIdade() {
    return (`A idade de alguém que nasceu em ${anoNascimento} e está no ano de ${anoAtual} é de ${idade} anos`);
}

//FUNÇÃO VERIFICAR MAIORIDADE
function verificarMaioridade() {
    if (idade >= 18) {
        return ('Essa pessoa já é maior de idade');
    }
    else if (idade < 18) {
        return ('Essa pessoa é menor de idade');
    }
    else {
        return ('Insira uma idade válida');
    }
}

//IMPRESSÃO
console.log(calcularIdade());
console.log(verificarMaioridade());