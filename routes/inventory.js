const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        res.status(200).send('inventory get')
    })
    .post((req, res) => {
        res.status(200).send('inventory post')
    })
    
router
    .route('/:inventoryId')
    .get((req, res) => {
        res.status(200).send('inventory by id get')
    })
    .post((req, res) => {
        res.status(200).send('inventory by id post')
    })


module.exports = router;
