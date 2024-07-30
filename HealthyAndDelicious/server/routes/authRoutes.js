import express from 'express'
import {createAccount, signIn, logout} from '../controllers/authController.js'
const router = express.Router()

router.use('/create-account', createAccount)
router.use('/sign-in', signIn)
router.use('/logout', logout)

export default router