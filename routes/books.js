const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sharpProcess = require('../middleware/sharp-config');

const bookCtrl = require('../controllers/books');

router.post('/', auth, multer, sharpProcess, bookCtrl.createBook);
router.put('/:id', auth, multer, sharpProcess, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);
router.get('/:id', bookCtrl.getOneBook);
router.get('/', bookCtrl.getAllBooks);

module.exports = router;