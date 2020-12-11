const {Router}= require('express')

const router = Router()

const { createUser, getUsers, updateuser } = require('../controllers/userController')

//Route for creting a user account
router.post('api/newUser', createUser)


//Updating a User
router.put('api/newUpdate', updateUser)

module.exports = router