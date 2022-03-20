require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.static('./public'));
app.use(express.json());

// ROUTES
const warehouseRoute = require('./routes/warehouse');
app.use('/warehouse', warehouseRoute);

const inventoryRoute = require('./routes/inventory');
app.use('/inventory', inventoryRoute);

const searchRoute = require('./routes/search');
app.use('/search', searchRoute);

// LISTEN
app.listen(process.env.PORT, () => {
    console.log('InStock Server Running');
})