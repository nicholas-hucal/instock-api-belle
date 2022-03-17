const fs = require('fs');
const inventoryModel = require('./inventory-model.js');
const warehouseModel = require('./warehouse-model.js');

exports.doSearch = (search) => {
    let result = [];

    if (search.type === 'warehouse') {
        const warehouses = warehouseModel.getAll();
        result = warehouses.filter(warehouse => {
            const name = warehouse.name.toLowerCase().includes(search.search.toLowerCase());
            const address = warehouse.address.toLowerCase().includes(search.search.toLowerCase());
            const contactName = warehouse.contact.name.toLowerCase().includes(search.search.toLowerCase());
            const contactPosition = warehouse.contact.position.toLowerCase().includes(search.search.toLowerCase());
            const contactEmail = warehouse.contact.email.toLowerCase().includes(search.search.toLowerCase());
            const contactPhone = warehouse.contact.phone.toLowerCase().includes(search.search.toLowerCase());
    
            if (name || address || contactName || contactPosition || contactEmail || contactPhone) {
                return warehouse;
            }
        })
    }

    if (search.type === 'inventory') {
        const inventories = inventoryModel.getAll();
        result = inventories.filter(inventory => {
            const itemName = inventory.itemName.toLowerCase().includes(search.search.toLowerCase());
            const category = inventory.category.toLowerCase().includes(search.search.toLowerCase());
            const warehouseName = inventory.warehouseName.toLowerCase().includes(search.search.toLowerCase());
    
            if (itemName || category || warehouseName) {
                return inventory;
            }
        })
    }

    return result;
}