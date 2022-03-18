const fs = require('fs');

exports.getAll = () => {
    const inventories = fs.readFileSync('./data/inventories.json');
    return JSON.parse(inventories)
}

exports.getOne = (id) => {
    const allInventory = exports.getAll();
    return allInventory.find(item => item.id === id);
}

exports.addOne = (inventory) => {
    const allInventory = exports.getAll();
    allInventory.push(inventory);
    fs.writeFileSync('./data/inventories.json', JSON.stringify(allInventory));
}

exports.editOne = (inventory) => {
    const allInventory = exports.getAll();
    const foundIndex = allInventory.findIndex(existing => existing.id === inventory.id);
    allInventory[foundIndex] = inventory;
    fs.writeFileSync('./data/inventories.json', JSON.stringify(allInventory));
}