const { v4: uuidv4 } = require('uuid');
const inventoryModel = require('../models/inventory-model');
const { isEmpty } = require('../utils/helpers.js');
const { validateInventory } = require('../utils/validation.js');

const formatInventory = (data) => {
  const inventory = {
      "id": data.id,
      "warehouseID": data.warehouseID,
      "warehouseName": data.warehouseName,
      "itemName": data.itemName,
      "description": data.description,
      "category": data.category,
      "status": data.status,
      "quantity": data.quantity
  }
  return inventory;
} 

exports.addInventory = (req, res) => {
    const data = req.body;
    if (!isEmpty(data)) {
        if (validateInventory(data)) {
            data.id = uuidv4();
            inventoryModel.addOne(formatInventory(data));
            res.status(201).json({ "id": data.id });
        } else {
            res.status(400).json({ "error": "validation failed" });
        }
    }
    else {
        res.status(400).send({ message: 'improperly formatted request' });
    }
}

exports.editInventory = (req, res) => {
    const data = req.body;
    const id = req.params.inventoryId;
    if (!isEmpty(data) || id !== '') {
        if (validateInventory(data) && inventoryModel.getOne(id)) {    
            inventoryModel.editOne(formatInventory(data));
            res.status(201).json({ "id": data.id });
        } else {
            res.status(400).json({ "error": "validation failed or inventory does not exist" });
        }
    }
    else {
        res.status(400).send({ message: 'improperly formatted request' });
    }  
}

exports.getIndividualInventory = (req, res) => {
    const inventory = inventoryModel.getAll().find(
        (inventory) => inventory.id === req.params.inventoryId
    );

    if (inventory) {
    res.status(200).json(inventory);
    }
    else {
    res.status(400).json({message: "No Inventory was found with the provided Id"});
  }
}

exports.getAllInventory = (req, res) => {
  res.status(200).json(inventoryModel.getAll())
}

exports.deleteInventoryItem = (req, res) => {
  inventoryModel.deleteOne(req.params.inventoryId);
  res.status(200).json({ message: `${req.params.inventoryId} has been deleted.` });
};