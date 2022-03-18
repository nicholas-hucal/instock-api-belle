const searchModel = require('../models/search-model');

exports.doSearch = (req, res) => {
    res.status(200).json(searchModel.doSearch(req.body))
};