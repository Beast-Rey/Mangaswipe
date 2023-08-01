const express = require('express')
const router = express.Router()
const {CreateUser, LoginUser} = require('../Controller/AuthController')

router.post('/create', CreateUser)
router.post('/login', LoginUser)

module.exports = router