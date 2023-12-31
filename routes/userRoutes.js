const express = require('express')

const router = express.Router()
const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')


router.post('/signup', authController.signup)
router.post('/login', authController.login)


router.patch('/verifyEmail/:token', authController.verifyEmail)
router.post('/resendVerifyEmail', authController.resendVerifyEmail)

router.post('/forgotPassword', authController.forgotPassword)
router.patch('/resetPassword/:token', authController.resetPassword)
router.patch('/updateMyPassword', authController.protect, authController.updatePassword)


router.patch('/updateMe', authController.protect, userController.updateMe)
router.delete('/deleteMe', authController.protect, userController.deleteMe)

router
    .route('/')
    .get(userController.getAllUsers)
// .post(userController.checkBody, userController.addUser)

router
    .route('/:id')
    .delete(userController.deleteUser)
    .patch(userController.updateUser)

// .get(userController.getUser)

module.exports = router;