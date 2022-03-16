const express = require('express');
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
    .get((req, res) => {
        res.status(200).send('inventory by id get')
    })
    .put(inventoryController.editInventory);

module.exports = router;
