const express = require('express');
const { AddBook, FindAllBooks, FindBook, DeleteBook, UpdateBook } = require('../controllers/books.controllers');
const router = express.Router();

//add book
router.post('/books', AddBook)

//update book
router.put('/books/:id', UpdateBook)

//delete book
router.delete('/books/:id', DeleteBook)

//show books
router.get('/books', FindAllBooks)

// show one book 
router.get('/books/:id', FindBook)




module.exports= router ;