require('dotenv').config();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const addOne = (data) => {
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
        
        saveAll(warehouse);
        return { "id": id }
    }
    return { "error": "validation failed" }
}

const getAll = () => {
    const warehouses = fs.readFileSync('./data/warehouses.json');
    return JSON.parse(warehouses)
}

const saveAll = (warehouse) => {
    const warehouses = getAll();
    warehouses.push(warehouse);
    fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouses));
}

const validateWarehouse = (warehouse) => {
    const empty =  Object.values(warehouse).filter(field => {
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

exports.addOne = addOne;
exports.getAll = getAll;
