module.exports = function(app, fs, qs) {
    app.get('/', function(req, res){
        res.render('home.html');
    });
}