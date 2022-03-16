const { v4: uuidv4 } = require('uuid');
const warehouseModel = require('../models/warehouse-model');
const { isEmpty } = require('../utils/helpers.js');
const { validateWarehouse } = require('../utils/validation.js');

exports.getAllWarehouses = (_req, res) => {
    let formattedWarehouses = warehouseModel.getAll()
        .map(warehouse => {
            return {
                "id": warehouse.id,
                "name": warehouse.name,
                "address": `${warehouse.address}, ${warehouse.city}, ${warehouse.country}`,
                "contactName": warehouse.contact.name,
                "contactPhone": warehouse.contact.phone,
                "contactEmail": warehouse.contact.email
            }
        })
    
    res.status(200).json(formattedWarehouses)
};

exports.addWarehouse = (req, res) => {
    const data = req.body;
    if (!isEmpty(data)) {
        if (validateWarehouse(data)) {
            data.id = uuidv4();
            warehouseModel.addOne(formatWarehouse(data));
            res.status(201).json({ "id": data.id });
        } else {
            res.status(400).json({ "error": "validation failed" });
        }
    }
    else {
        res.status(400).send({ message: 'improperly formatted request' });
    }
}

exports.editWarehouse = (req, res) => {
    const data = req.body;
    const id = req.params.warehouseId;
    if (!isEmpty(data) || id !== '') {
        if (validateWarehouse(data)) {    
            data.id = id;
            if (warehouseModel.editOne(formatWarehouse(data))) {
                res.status(200).json({ "id": id });
            } else {
                res.status(404).json({"error": "warehouse not found"});
            }
        } else {
            res.status(400).json({ "error": "validation failed" });
        }
    }
    else {
        res.status(400).send({ message: 'improperly formatted request' });
    }  
}

exports.getWarehouseInventories = (req, res) => {
    const id = req.params.warehouseId;
    if (!id || id !== '') {
        const inventories = warehouseModel.getWarehouseInventories(id);
        res.status(200).json({"inventories": inventories});
    } else {
        res.status(400).send({ message: 'improperly formatted request' });
    }
}

const formatWarehouse = (data) => {
    const warehouse = {
        "id": data.id,
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
    return warehouse;
}