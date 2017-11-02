var fortune= require('./lib/fortune.js');
var express = require('express');
var app = express();
//Установка механизма представления handebars
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

// Добавляю промежуточное ПО static
app.use(express.static(__dirname+'/public'));

// Обьявление маршрутов
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/about', function (req,res) {
    res.render('about', {fortune: fortune.getFortune()});
});

// Обобщенный обработчик 404 (промежуточное ПО)
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});

// обработчик ошибки 500
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});
app.listen(app.get('port'),function () {
    console.log('Express запущен на http://localhost:' + app.get('port')+ '; нажмите Ctrl+C для завершения.' );
});




