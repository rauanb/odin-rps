function getRandomInt(max = 3) {
    const inteiro = Math.floor(Math.random() * max);
    // console.log(inteiro);
    return inteiro
}


function getComputerChoice() {
    const opcoes = ['rock', 'paper', 'scissors'];
    let computer = opcoes[getRandomInt()];
    console.log(computer)
}

function getHumanChoice() {
    let human = prompt('Pick one of these: Rock, Paper ou Scissors');
    console.log(human);
}
// getRandomInt();
// getComputerChoice();
getHumanChoice();