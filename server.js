// Needed for dotenv
require("dotenv").config();

// Needed for Express
var express = require('express')
var app = express()

// Setting where the location of your EJS files are
app.set('views', '.')

// Needed for EJS
app.set('view engine', 'ejs');

// Needed for public directory
app.use(express.static(__dirname + '/public'));

// Needed for parsing form data
app.use(express.json());      
app.use(express.urlencoded({extended: true}));

// root page
app.get('/', function(req, res) {
   res.render('index');
});

app.get('/products', function(req, res) {
    res.render('products');
 });

 app.get('/events', function(req, res) {
    res.render('events');
 });

 app.get('/support', function(req, res) {
    res.render('support');
 });

 app.get('/contribute', function(req, res) {
    res.render('contribute');
 });

 app.get('/aibotsproductpage', function(req, res) {
    res.render('aibotsproductpage');
 });

 app.get('/pairchatproductpage', function(req, res) {
    res.render('pairchatproductpage');
 });

 app.get('/smartcomposeproductpage', function(req, res) {
    res.render('smartcomposeproductpage');
 });

// Tells the app which port to run on
app.listen(8080);

