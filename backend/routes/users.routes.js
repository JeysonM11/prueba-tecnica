const express = require('express');
const router = express.Router();
const {
  getUsers,
  createUser,
  deleteUser
} = require('../controllers/users.controller');

// Rutas de usuarios
router.get('/', getUsers);
router.post('/', createUser);
router.delete('/:documento', deleteUser);

module.exports = router;
