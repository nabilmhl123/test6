const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const booksCtrl = require('../controllers/book');

router.get('/', booksCtrl.getAllBooks);
router.post('/', auth, booksCtrl.createBooks);
router.get('/:id', auth, booksCtrl.getOneBooks);
router.put('/:id', auth, booksCtrl.modifyBooks);
router.delete('/:id', auth, booksCtrl.deleteBooks);

module.exports = router;