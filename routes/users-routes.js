const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');
const fileUpload = require('../middleware/file-upload');

const router = express.Router();

// GET - GET Users
router.get('/', usersController.getUsers);

// POST - POST Signup
router.post(
  '/signup',
  fileUpload.single('image'),
  [
    // Express-validator Check
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],
  usersController.signup
);

// POST - POST Login 
router.post('/login', usersController.login);

module.exports = router;
