let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function guessNum() {
    const num = 17;
    let attempts = 10;
    let userNum = prompt('Угадайте число');

     function user() {
        if (isNaN(userNum) || userNum==='') {
            console.log('Введите число!');
            userNum = prompt('Угадайте число');
        } else if (userNum===null) return;
         attempts--;
        if (num < userNum) {
            console.log('Загаданное число меньше, осталось попыток: ', attempts);
            guessNum();
        } else if (num > userNum) {
            console.log('Загаданное число больше, осталось попыток: ', attempts);
            guessNum();
        } else if (num == userNum) {
            console.log('Поздравляю, Вы победили!');
            return;
        } else if (num==null){
            return;
        }

    }
    return user();
}

guessNum();

