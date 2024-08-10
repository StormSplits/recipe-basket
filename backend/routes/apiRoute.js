const express = require('express');
const apiController = require('./../controller/apiController.js');

const router = express.Router();

router.route('/chat').post(apiController.getChat);
router.route('/save').post(apiController.saveRecipe);
router.route('/saved').post(apiController.getSaved);

module.exports = router;

