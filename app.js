// npm install express ejs body-parser cookie-parser
var express = require('express')
var ejs     = require('ejs')
var body    = require('body-parser')
var cookie  = require('cookie-parser')
var app     = express()
var valid   = [ ]
app.engine('html', ejs.renderFile)
app.listen(2000)
app.use( body.urlencoded({extended:false}) )
app.use( cookie() )
app.get('/', showIndex)
app.get('/login', showLogInPage)
app.post('/login', checkLogIn)
app.get('/profile', showProfilePage)
app.get('/logout', logoutUser)
app.use( express.static('public') )
app.use( showError )
function showIndex(req, res)     { res.render('index.html') }
function showLogInPage(req, res) { res.render('login.html') }
function checkLogIn(req, res) {
    if (req.body.email == 'mark@fb.com' && req.body.password == 'mark123') {
        var card = generateCard()
        valid[card] = req.body.email
        res.header('Set-Cookie', 'card=' + card)
        res.redirect('/profile')
    } else {
        res.redirect('/login')
    }
}
function showError(req, res) {
    res.render('error.html')
}

function generateCard() {
    var a = parseInt( Math.random() * 10000 )
    var b = parseInt( Math.random() * 10000 )
    var c = parseInt( Math.random() * 10000 )
    var d = parseInt( Math.random() * 10000 )
    return a + '-' + b + '-' + c + '-' + d
}

function showProfilePage(req, res) {
    if (valid[req.cookies.card]) {
        res.render('profile.html')
    } else {
        res.redirect('/login')
    }
}

function logoutUser(req, res) {
    delete valid[req.cookies.card]
    res.redirect('/')
}

