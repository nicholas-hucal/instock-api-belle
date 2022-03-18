const express = require('express');
const inventoryController = require('../controllers/inventory-controller.js');
const router = express.Router();

router
    .route('/')
    .get(inventoryController.getAllInventory)
    .post(inventoryController.addInventory);
    
router
    .route('/:inventoryId')
    .get(inventoryController.getIndividualInventory)
    .put(inventoryController.editInventory);

module.exports = router;
