const { v4: uuidv4 } = require('uuid');
const warehouseModel = require('../models/warehouse-model');
const { isEmpty } = require('../utils/helpers.js');
const { validateWarehouse } = require('../utils/validation.js');

exports.addWarehouse = (req, res) => {
    const data = req.body
    if (!isEmpty(data)) {
        if (validateWarehouse(data)) {
            const id = uuidv4()
    
            const warehouse = {
                "id": id,
                "name": data.name,
                "address": data.address,
                "city": data.city,
                "country": data.country,
                "contact": {
                    "name": data.contactName,
                    "position": data.contactPosition,
                    "phone": data.contactPhone,
                    "email": data.contactEmail
                }
            }
    
            warehouseModel.addOne(warehouse);
            res.status(200).json({ "id": id });
        } else {
            res.status(400).json({ "error": "validation failed" });
        }
    }
    else {
        res.status(400).send({ message: 'improperly formatted request' });
    }
}