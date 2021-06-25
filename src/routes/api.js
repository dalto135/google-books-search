const router = require('express').Router();
const Book = require('../models/Book');

//Retrieve information of all Books
router.get('/api/books', (req, res) => {
    Book.aggregate({},

    function(err, result) {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    }
  )
});

//Create new Boo
router.post('/api/books', (req, res) => {
    Book.create(req.body)
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
});

//Add exercise to existing book
router.delete('/api/books/:id', (req, res) => {
  Book.destroy({_id: req.params.id}, {$push: {exercises: [req.body]}},

    function(err, result) {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    }
  )
});



//Retrieve information of all Books with the calculated total duration of each Book
router.get('*', (req, res) => {
  Book.aggregate([],

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
