function guessNum() {
    const num = (Math.floor(Math.random() * 100) + 1);
    console.log(num);


    function user() {
        let userNum = prompt('Угадайте число');
        if (isNaN(userNum) || userNum === '') {
            confirm('Введите число!');
            userNum = prompt('Угадайте число');
        } else if (userNum === null) {
            alert('Игра окончена');
            return;
        }
        if (num < userNum && num > 0) {
            alert('Загаданное число меньше');
            user();
        } else if (num > userNum && num < 100) {
            alert('Загаданное число больше');
            user();
        } else if (num == userNum) {
            alert('Поздравляю, Вы победили!');
            return;

        }

    }

    return user();
}

guessNum();

