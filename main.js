let computerScore = 0;
let humanScore = 0;

function getRandomInt(max = 3) {
    const inteiro = Math.floor(Math.random() * max);
    // console.log(inteiro);
    return inteiro
}


function getComputerChoice() {
    const opcoes = ['rock', 'paper', 'scissors'];
    let computer = opcoes[getRandomInt()];
    console.log(computer);
    return computer;
}

function getHumanChoice() {
    let human = prompt('Pick one of these: rock, paper ou scissors');
    console.log(human);
    return human;
}

function callWinner( winner ) {
    if (winner == 'computer') {
        computerScore++;
        console.log(`${winner} won!`);
    } else if (winner == 'human') {
        humanScore++;
        console.log(`${winner} won!`);
    } else {
        console.log('Empate');
    }
}

function playRound() {
    let human = getHumanChoice();
    let computer = getComputerChoice();

    
    if (computer === 'rock') {
        if (human === 'rock') {
            // console.log('EMPATE')
            callWinner('empate')
        } else if (human === 'paper') {
            // console.log('Humano ganhou')
            callWinner('human')
        } else {
            // console.log('Computador ganhou')
            callWinner('computer')
        }
    } else if (computer === 'paper') {
        if (human === 'paper') {
            // console.log('EMPATE')
            callWinner('empate')
        } else if (human === 'scissors') {
            // console.log('Humano ganhou')
            callWinner('human')
        } else {
            // console.log('Computador ganhou')
            callWinner('computer')
        }
    } else {
        if (human === 'scissors') {
            // console.log('EMPATE')
            callWinner('empate')
        } else if (human === 'rock') {
            // console.log('Humano ganhou')
            callWinner('human')
        } else {
            // console.log('Computador ganhou')
            callWinner('computer')
        }
    }
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`)
};

playRound();
// getComputerChoice(); OK
// getHumanChoice(); OK