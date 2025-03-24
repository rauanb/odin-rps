// Documentação da Mozilla sobre o Math.Random apresentou uma função para pegar inteiros
// As linhas comentadas são as originais, as seguintes são as alteradas para se adequarem às necessidades do exercício

// function getRandomInt(max) {
function getRandomInt() {
    // const inteiro = Math.floor(Math.random() * max);
    const inteiro = Math.floor(Math.random() * 3);
    // console.log(inteiro);
    return inteiro
}


function getComputerChoice() {
    const opcoes = ['rock', 'paper', 'scissors'];
    let computer = opcoes[getRandomInt()];
    console.log(computer)
}
// getRandomInt();
getComputerChoice();