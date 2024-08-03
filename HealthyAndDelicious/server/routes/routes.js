import express from 'express'
import authRoutes from './authRoutes.js'
import recipesRoutes from './recipesRoutes.js'

const router = express.Router()

router.use('/auth', authRoutes)
router.use('/recipes', recipesRoutes)


export default router