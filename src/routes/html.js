const router = require('express').Router();
const path = require('path');

router.get('/book', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
