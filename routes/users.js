const express = require('express')
const openRouter = express.Router()

const users = require('../users')

// openRouter.get('/')

/**
map urls to functions
for users
*/
// openRouter.post('/authenticate', users.authenticate)
openRouter.post('/login', users.auth)
openRouter.get('/users', users.getAllUsers)
openRouter.get('/users/:userid', users.getOneUser)
openRouter.get('/users/:userid/relationships/networks', users.getUserNetworks)
openRouter.get('/users/:userid/networks', users.getUserNetworks)
openRouter.post('/users', users.createUser)
openRouter.patch('/users/:userid', users.updateUser)

/*
export express new openRouter object
and its methods
*/
module.exports = openRouter
