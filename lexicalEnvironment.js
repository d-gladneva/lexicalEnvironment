function guessNum() {
    // const num = (Math.floor(Math.random() * 100) + 1);
    const num = 17;
    let attempts = 10;
    let userNum = prompt('Угадайте число');

     function user() {
        if (isNaN(userNum) || userNum==='') {
            confirm('Введите число!');
            userNum = prompt('Угадайте число');
        } else if (userNum===null) {
            alert('Игра окончена');
            return;
        }

         attempts--;
        if (num < userNum && num > 0) {
            alert('Загаданное число меньше, осталось попыток: ', attempts);
            guessNum();
        } else if (num > userNum && num < 100) {
            alert('Загаданное число больше, осталось попыток: ', attempts);
            guessNum();
        } else if (num == userNum) {
            alert('Поздравляю, Вы победили!');
            return;

        }

    }
    return user();
}

guessNum();

