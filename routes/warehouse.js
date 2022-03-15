const express = require('express');
const router = express.Router();
const { addOne } = require('../model/warehouse-model.js');

router
    .route('/')
    .get((req, res) => {
        res.status(200).send('warehouse get')
    })
    .post((req, res) => {
        const warehouse = req.body;
        if (warehouse) {
            const result = addOne(req.body);
            if (!result.error) {
                res.status(200).json(result);
            } else {
                res.status(400).json(result);
            }
        } else {
            res.status(400).send({message: 'improperly formatted request'});
        }
    })

router
    .route('/:warehouseId')
    .get((req, res) => {
        res.status(200).send('warehouse by id get')
    })
    .post((req, res) => {
        res.status(200).send('warehouse by id post')
    })

module.exports = router;
