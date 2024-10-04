const Router = require('express')
const router  = new Router()
const UserController = require('../controller/user.controller')

router.post('/user', UserController.creatUser)
router.get('/users', UserController.getUsers)
router.get('/users/:id', UserController.getOneUser)


module.exports = router