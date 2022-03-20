const { phoneRegex, emailRegex} = require('./helpers.js');

exports.validateWarehouse = (warehouse) => {
    const empty = Object.values(warehouse).filter(field => {
        if (field.length < 1) {
            return 1
        }
    })
    const email = warehouse.contactEmail.match(emailRegex);
    const phone = warehouse.contactPhone.match(phoneRegex);
    if (empty.length > 0 || !email || !phone) {
        return false
    } else {
        return true
    }
}

exports.validateInventory = (inventory) => {
    const empty = Object.values(inventory).filter(field => {
        if (field.length < 1) {
            return 1
        }
    })
    const quantityValid = typeof inventory.quantity === "number" ? true : false;
    if (empty.length > 0 || !quantityValid) {
        return false
    } else {
        return true
    }
}