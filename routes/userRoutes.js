const express = require('express');
const router = express.Router();
const userController = require('../src/controllers/userController');

router.get('/', userController.list);
router.get('/add', userController.formAdd);
router.post('/add', userController.add);
router.get('/edit/:id', userController.formEdit);
router.post('/edit/:id', userController.edit);
router.get('/delete/:id', userController.delet);

module.exports = router;