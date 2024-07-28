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

// Controller Create (with sequalize is .findByPK() )
const getOne = catchError(async(req,res) => {
    const { id } = req.params
    const result = await User.findByPk(id)
    if(!result) return res.sendStatus(404)
    return res.json(result)
})

module.exports = {
    getAll,
    create,
    getOne
}