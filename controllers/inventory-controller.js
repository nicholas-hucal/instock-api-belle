const inventoryModel = require('../models/inventory-model');

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