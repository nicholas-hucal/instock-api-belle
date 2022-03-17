const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search-controller.js');

router
    .route('/')
    .post(searchController.doSearch);

module.exports = router;