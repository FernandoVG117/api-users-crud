const catchError = require('../utils/catchError');
const User = require('../models/User');

// Controller GetAll (with sequalize is .findAll() )
const getAll = catchError(async(req,res) => {
    const result = await User.findAll(req.body)
    return res.status(200).json(result)
})

// Controller Create (with sequalize is .create() )
const create = catchError(async(req,res) => {
    const result = await User.create(req.doby)
    return res.status(201).json(result)
})

// Controller Create (with sequalize is .create() )
// const getOne = catchError(async(req,res))

module.exports = {
    getAll,
    create
}