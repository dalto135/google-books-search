const router = require('express').Router();
const Book = require('../models/Book');

//Retrieve information of all Books
router.get("/api/books", (req, res) => {
  Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.status(404).json(err.message);
    });
});

//Create new Book
router.post('/api/books', (req, res) => {
    Book.create(req.body)
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
});

// Delete book by id
router.delete('/api/books/:id', (req, res) => {
  Book.remove({_id: req.params.id},

    function(err, result) {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    }
  )
});

module.exports = router;
