let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function guessNum() {
    const num = 17;
    let attempts = 10;
    let userNum = prompt('Угадайте число');

    return function () {
        if (!isNumber(userNum)) {
            userNum = prompt('Угадайте число');
        }
        attempts--;
        if (num < userNum) {
            console.log('Загаданное число меньше, осталось попыток: ', attempts);
            userNum = prompt('Угадайте число');
        } else if (num > userNum) {
            console.log('Загаданное число больше, осталось попыток: ', attempts);
            userNum = prompt('Угадайте число');
        } else if (num == userNum) {
            console.log('Поздравляю, Вы победили!');
        }

    }

}

const guessBotNum = guessNum();

guessBotNum();
console.log(guessBotNum);

