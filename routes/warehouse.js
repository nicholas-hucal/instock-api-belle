const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouse-controller.js');

router
    .route('/')
    .get((req, res) => {
        res.status(200).send('warehouse get')
    })
    .post(warehouseController.addWarehouse);

router
    .route('/:warehouseId')
    .get((req, res) => {
        res.status(200).send('warehouse by id get')
    })
    .post((req, res) => {
        res.status(200).send('warehouse by id post')
    })

module.exports = router;