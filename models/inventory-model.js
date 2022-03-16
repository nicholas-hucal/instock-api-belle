const fs = require('fs');

exports.getAll = () => {
    const inventories = fs.readFileSync('./data/inventories.json');
    return JSON.parse(inventories)
}