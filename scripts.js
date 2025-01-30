const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const machineChoiceImage = document.querySelector('#machine-choice');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const choices = {
    rock: "images/rock.png",
    paper: "images/paper.png",
    scissors: "images/scissors.png"
};

const playHuman = (humanChoice) => {
    let count = 0;
    const interval = setInterval(() => {
        const randomChoice = playMachine();
        machineChoiceImage.src = choices[randomChoice];
        count++;
        if (count === 5) { // Exibir animação de 5 trocas (~5s)
            clearInterval(interval);
            playTheGame(humanChoice, randomChoice);
        }
    }, 500);
};

const playMachine = () => {
    const keys = Object.keys(choices);
    return keys[Math.floor(Math.random() * keys.length)];
};

const playTheGame = (human, machine) => {
    console.log(`Humano: ${human} | Máquina: ${machine}`);

    machineChoiceImage.src = choices[machine];

    if (human === machine) {
        result.innerHTML = `Deu Empate! Ambos escolheram ${human}.`;
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = `🎉 Você Ganhou! Você escolheu ${human} e a máquina escolheu ${machine}.`;
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = `💀 Você Perdeu! Você escolheu ${human} e a máquina escolheu ${machine}.`;
    }

    // Adiciona efeito de piscar na tela
    result.classList.add("blink");
    setTimeout(() => {
        result.classList.remove("blink");
    }, 2000);
};
