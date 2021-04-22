module.exports = function(app, fs, qs) {
    app.get('/', function(req, res){
        res.render('home.html');
    });

    app.post('/test', function(request, response){
        let body = '';
        request.on('data', function(data) {
            body = body + data;
        });
        request.on('end', function() {
            let post = qs.parse(body);
            console.log(post);
            response.writeHead(200);
            response.end();
        })
    })
}