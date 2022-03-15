const fs = require('fs');

exports.addOne = (warehouse) => {
    exports.saveAll(warehouse);
}

exports.getAll = () => {
    const warehouses = fs.readFileSync('./data/warehouses.json');
    return JSON.parse(warehouses)
}

exports.saveAll = (warehouse) => {
    const warehouses = exports.getAll();
    warehouses.push(warehouse);
    fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouses));
}