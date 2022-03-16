const express = require('express');
const inventoryController = require('../controllers/inventory-controller.js');
const router = express.Router();
const inventoryController = require('../controllers/inventory-controller.js');

router
    .route('/')
    .get((req, res) => {
        res.status(200).send('inventory get')
    })
    .post(inventoryController.addInventory);
    
router
    .route('/:inventoryId')
    .get(inventoryController.getIndividualInventory)
    .put(inventoryController.editInventory);

module.exports = router;
