const express = require('express');
const router = express.Router();
const {register, login, logout, getUsers, getUser, updateUser, deleteUser} = require('../Controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
