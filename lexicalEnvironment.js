let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function guessNum() {
    const num = 17;
    let attempts = 10;
    let userNum = prompt('Угадайте число');

     function user() {
        if (!isNumber(userNum)) {
            console.log('Введите число!');
            userNum = prompt('Угадайте число');
        }
         attempts--;
        if (num < userNum) {
            console.log('Загаданное число меньше, осталось попыток: ', attempts);
            guessNum();
        } else if (num > userNum) {
            console.log('Загаданное число больше, осталось попыток: ', attempts);
            guessNum();
        } else if (num == userNum) {
            console.log('Поздравляю, Вы победили!');
        }

    }
    return user();
}

guessNum();

