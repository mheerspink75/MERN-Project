const express = require('express');
const { check } = require('express-validator');

const placesControllers = require('../controllers/places-controllers');
const fileUpload = require('../middleware/file-upload');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

// GET - GET Places by PlaceID and by UserID
router.get('/:pid', placesControllers.getPlaceById);
router.get('/user/:uid', placesControllers.getPlacesByUserId);

// JWT Authentication
router.use(checkAuth);

// POST - CREATE Place
router.post(
  '/',
  fileUpload.single('image'),
  [
    // Express-validator Check
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address')
      .not()
      .isEmpty()
  ],
  placesControllers.createPlace
);

// PATCH - UPDATE Place
router.patch(
  '/:pid',
  [
    // Express-validator Check
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })
  ],
  placesControllers.updatePlace
);

// DELETE - DELETE Place
router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
