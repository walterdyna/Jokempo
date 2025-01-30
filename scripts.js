function getRandomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

function changeLetterColors() {
    const title = document.getElementById("jokempo");
    const letters = title.innerText.split("");
    title.innerHTML = letters.map(letter => 
        `<span style="color:${getRandomColor()}">${letter}</span>`
    ).join("");
}

setInterval(changeLetterColors, 500);
    

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
    // Exibir uma animação rápida de escolha da máquina
    let count = 0;
    const interval = setInterval(() => {
        const randomChoice = playMachine();
        machineChoiceImage.src = choices[randomChoice];
        count++;
        if (count === 1) {  // Apenas uma troca para animação rápida
            clearInterval(interval);
            playTheGame(humanChoice, randomChoice);
        }
    }, 200); // Diminui o tempo da animação para maior fluidez
};

const playMachine = () => {
    const keys = Object.keys(choices);
    return keys[Math.floor(Math.random() * keys.length)];
};

const playTheGame = (human, machine) => {
    console.log(`Humano: ${human} | Máquina: ${machine}`);

    machineChoiceImage.src = choices[machine];

    if (human === machine) {
        result.innerHTML = `Deu Empate! Ambos escolheram ${translateChoice(human)}.`;
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = `🎉 Você Ganhou! Você escolheu ${translateChoice(human)} e a máquina escolheu ${translateChoice(machine)}.`;
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = `💀 Você Perdeu! Você escolheu ${translateChoice(human)} e a máquina escolheu ${translateChoice(machine)}.`;
    }
};

const translateChoice = (choice) => {
    switch (choice) {
        case 'rock': return 'Pedra';
        case 'paper': return 'Papel';
        case 'scissors': return 'Tesoura';
        default: return choice;
    }
};
