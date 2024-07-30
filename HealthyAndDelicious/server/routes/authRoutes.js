import express from 'express'
import {createAccount, signIn} from '../controllers/authController.js'
const router = express.Router()

router.use('/create-account', createAccount)
router.use('/sign-in', signIn)

export default router