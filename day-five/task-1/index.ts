type Choice = 'Камень' | 'Ножницы' | 'Бумага'
type Answer = {
    user: string,
    computer: string,
    answer:string
}

function isChoice(value: string): value is Choice {
    return ['Камень', 'Ножницы', 'Бумага'].includes(value);
}

function gameRockPaperScissors(optionUser: Choice): Answer {
    const choice: Choice[] = ['Камень', 'Ножницы', 'Бумага']
    const computerChoice: Choice = choice[Math.floor(Math.random() * choice.length)];
    let answer: string
    if (computerChoice === optionUser) {
        answer = "Ничья"
    } else if (
        (optionUser === "Камень" && computerChoice === "Ножницы") ||
        (optionUser === "Ножницы" && computerChoice === "Бумага") ||
        (optionUser === "Бумага" && computerChoice === "Камень")
    ) {
        answer = "Игрок победил!"
    } else {
        answer = "Компьютер победил!"
    }
    return {
        user: optionUser,
        computer: computerChoice,
        answer:answer
    }
}

try {
    const userChoise: string | null = prompt("Выберите: Камень, Ножницы или Бумага")
    if (!userChoise) {
        throw new Error('Вы не выбрали Камень, Ножницы или Бумага')
    }
    if (!isChoice(userChoise)) {
        throw new Error('Вы не выбрали Камень, Ножницы или Бумага')
    }
    const option: Choice = userChoise
    const gameAnswer = gameRockPaperScissors(option)
    console.log(gameAnswer);
} catch (error) {
    alert('Пожалуйста, выберите Камень, Ножницы или Бумага.');
}
