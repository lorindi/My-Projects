import express from 'express'
import authRoutes from './authRoutes.js'
import restaurantsRoutes from './restaurantsRoutes.js'
import recipesRoutes from './recipesRoutes.js'
const router = express.Router()

router.use('/auth', authRoutes)
router.use('/recipes', recipesRoutes)
router.use('/restaurants', restaurantsRoutes)

export default router
