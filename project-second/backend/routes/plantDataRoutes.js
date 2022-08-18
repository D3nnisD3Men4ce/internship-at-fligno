// Each resource in api will have its own file

const express = require('express')
const router = express.Router()
const { getPlantData, setPlantData } = require('../controllers/plantDataController')
const { protect } = require('../middleware/authMiddleware')

// Shorthand, chaining
router.route('/').get(protect, getPlantData).post(protect, setPlantData)
// router.get('/', getPlantData)
// router.post('/', setPlantData)

module.exports = router

