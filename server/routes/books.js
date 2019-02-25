// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/addbook', (req, res, next) => {
    res.render("books/addbook",{title:"Add a New Book"});
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/addbook', (req, res, next) => {
  let newbook = book({
    "Title":req.body.title,
    "Discription":req.body.discription,
    "Price":req.body.price,
    "Author":req.body.author,
    "Genre":req.body.genre
});

book.create(newbook, (err, contact) => {
    if(err) {
        console.log(err);
        res.end(err);
    } 
    else {
        // takes the user back to the contact-list page
        res.redirect('/books');
    }
});
});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


module.exports = router;
