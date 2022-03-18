const express = require('express');
const inventoryController = require('../controllers/inventory-controller.js');
const router = express.Router();

router
    .route('/')
    .get(inventoryController.getAllInventory)
    .post((req, res) => {
        res.status(200).send('inventory post')
    })
    
router
    .route('/:inventoryId')
    .get(inventoryController.getIndividualInventory)
    .post((req, res) => {
        res.status(200).send('inventory by id post')
    })


module.exports = router;
