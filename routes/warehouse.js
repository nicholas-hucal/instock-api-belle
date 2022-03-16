const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouse-controller.js');

router
    .route('/')
    .get(warehouseController.getAllWarehouses)
    .post(warehouseController.addWarehouse);

router
    .route('/:warehouseId')
    .get(warehouseController.getIndividualWarehouse)
    .post(warehouseController.editWarehouse);

router
    .route('/:warehouseId/inventory')
    .get(warehouseController.getWarehouseInventories)

module.exports = router;