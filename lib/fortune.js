//массив печений предсказаний
var fortunes = [
    " 1 Победи свои страхи, или они победят тебя.",
    " 2 Рекам нужны истоки.",
    " 3 Не бойся неведомого.",
    " 4 Тебя ждет приятный сюрприз.",
    " 5 Будь проще везде, где только можно.",
];
exports.getFortune = function () {
    var idx = Math.floor(Math.random()*fortunes.length);
    return fortunes[idx];
};