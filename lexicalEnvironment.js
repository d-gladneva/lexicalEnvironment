let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function guessNum(){
    const num =17;
    let userNum = prompt('Угадайте число');
    if (!isNumber(userNum)) {
        userNum = prompt('Угадайте число');
    }
    function user(b) {
        if (num>b) {
            console.log('Загаданное число меньше');
        } else if (num<b) console.log('Загаданное число больше');
    }
    return user(userNum)
}
guessNum();