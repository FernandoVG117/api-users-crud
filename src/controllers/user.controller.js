const catchError = require('../utils/catchError');
const User = require('../models/User');

// Controller GetAll
const getAll = catchError(async(req,res) => {
    const result = await User.findAll(req.body)
    return res.status(200).json(result)
})


module.exports = {
    getAll
}