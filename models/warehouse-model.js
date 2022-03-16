const fs = require('fs');
const inventoryModel = require('./inventory-model.js');

exports.addOne = (warehouse) => {
    exports.saveAll(warehouse);
}

exports.editOne = (warehouse) => {
    const warehouses = exports.getAll();
    const foundIndex = warehouses.findIndex(existing => existing.id === warehouse.id);
    if (foundIndex !== -1) {
        warehouses[foundIndex] = warehouse;
        fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouses));
        return true;
    }
    return false;
}

exports.getAll = () => {
    const warehouses = fs.readFileSync('./data/warehouses.json');
    return JSON.parse(warehouses)
}

exports.getWarehouseInventories = (warehouseId) => {
    const inventories = inventoryModel.getAll();
    return inventories.filter(inventory => inventory.warehouseID === warehouseId);
}

exports.saveAll = (warehouse) => {
    const warehouses = exports.getAll();
    warehouses.push(warehouse);
    fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouses));
}