const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    title: {
        type: String,
    },
    authors: {
        type: Array,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    }
    //AIzaSyA7dlRqQYZa0vP9rNnZSTcNJN96Akj8BL0
    //https://www.googleapis.com/books/v1/volumes?q=search+terms
        
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;