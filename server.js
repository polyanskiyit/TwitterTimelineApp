const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8000;
const Twitter = require('twitter');

//  Twitter config
const client = new Twitter({
    consumer_key: 'eddzVWOk4246YRU1utsTiQzMc',
    consumer_secret: '6fKhRJzkDsiwM8RBdLXNJluhLIjtuyFqBxJQ8f4XpjZvVloXX2',
    access_token_key: '951499196821135360-kq1O0NQLMu8YA9jcDFuvnAahUPbGPXI',
    access_token_secret: '3VUFTSRqETvBr5PaHYYpWwLNFw5PMT75ccWYR8TJaet8d'
});

app.use(express.static(__dirname + '/public'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        'extended': 'true'
    }));

app.post('/getTwitts', function (req, res) {
    var params = {
        screen_name: req.body.screenName
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (error) {
            res.send(error);
        }
        res.status(200).send(tweets);
    });
});

app.get("/error", function (req, res){  
    res.status(404).send("NotFound");
});

app.get("*", function (req, res) {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.listen(port, function (err) {
    if (err) throw err;
    console.log("Server started at port: " + port);
});

module.exports.app = app;