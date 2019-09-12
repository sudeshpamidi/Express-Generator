var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login', body: 'This login page' })
});

router.get('/register', function(req, res, next) {
    res.render('Register', { title: 'Register', body: 'This Register Page' })
});

router.post('/register', function(req, res, next) {

    var auth = authUser(req.body.username, req.body.password);

    if (auth) {
        res.status(200).send('Found');
    } else
        res.status(404).send("Not Found");
});


var authUser = (username, password) => {
    let auth = false;
    var users = getUsers().filter((user) => user.username === username && user.password === password);
    if (users.length > 0) {
        auth = true;
    }
    return auth;
};

var getUsers = () => {
    try {
        var userString = fs.readFileSync('./data/users.json');
        return JSON.parse(userString);
    } catch (err) {
        console.log(err)
        return [];
    }
};

module.exports = router;