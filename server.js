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

// Needed for Prisma to connect to database
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

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

 app.get('/readliaoproductpage', function(req, res) {
   res.render('readliaoproductpage');
});

app.get('/launchpadproductpage', function(req, res) {
   res.render('launchpadproductpage');
});

 app.get('/submit', function(req, res) {
   res.render('submit');
});

 app.post('/submit', async function(req, res) {

   // Try-Catch for any errors
   try {

      const { productName, productDescription, emailAddress, phoneNumber } = req.body;

      const isChecked = req.body.PDPA ? true : false;
      
      // Reload page if empty title or content
      if (!productName || !productDescription) {
         console.log("Unable to create new form, no title or content");
         res.render('contribute');
      } else {
            // Create post and store in database
            const form = await prisma.Form.create({
               data: { productName, productDescription, emailAddress, phoneNumber, isChecked },
            });

            // Redirect back to the homepage
            res.redirect('/submit');
      }
      } catch (error) {
         console.log(error);
         res.render('contribute');
   }
    
});

// Tells the app which port to run on
app.listen(8080);

