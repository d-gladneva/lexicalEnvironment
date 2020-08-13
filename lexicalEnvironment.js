let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function guessNum() {
    const num = 17;
    let attempts = 10;
    let userNum = prompt('Угадайте число');

    function user(b) {
        if (!isNumber(userNum)) {
            userNum = prompt('Угадайте число');
        }
        attempts--;
        if (num < b) {
            console.log('Загаданное число меньше, осталось попыток: ', attempts);
            userNum = prompt('Угадайте число');
        } else if (num > b) {
            console.log('Загаданное число больше, осталось попыток: ', attempts);
            userNum = prompt('Угадайте число');
        } else if (num == b) {
            console.log('Поздравляю, Вы победили!');
        }

    }
    return user(userNum);

}

guessNum();