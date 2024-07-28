const { getAll, create } = require('../controllers/user.controller');
const express = require('express');
const userRouter = express.Router();

userRouter.route('/')
    .get(getAll)
    .post(create)

module.exports = userRouter;