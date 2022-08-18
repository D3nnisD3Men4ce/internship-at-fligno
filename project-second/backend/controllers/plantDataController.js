const asyncHandler = require('express-async-handler')

const PlantData = require('../models/plantDataModel')
const User = require('../models/userModel') // Added to only do CRUD to own account

//  @desc   Get goals
//  @route  GET /api/goals
//  @access Private
const getPlantData = asyncHandler (async (req, res) => {
    const plantData = await PlantData.find({ user: req.user.id }) // req.user can be accessed because of the middleware
    res.status(200).json(plantData)
})


//  @desc   Set goal
//  @route  POST /api/goals
//  @access Private
const setPlantData = asyncHandler (async (req, res) => {
    if(!req.body.timeID) {
        res.status(400)
        throw new Error('Need time ID')
    }

    
    const plantData = await PlantData.create({
        user: req.user.id,
        timeID: req.body.timeID,
        nutSol: req.body.nutSol,
        humidity: req.body.humidity,
        phVal: req.body.phVal,
        temp: req.body.temp,
        waterTemp: req.body.waterTemp,
        waterLevel: req.body.waterLevel,
        lux: req.body.lux,
    })
    
    console.log("PLANT DATA " + req.body);
    res.status(200).json(plantData)
    // res.status(200).json({message: goal})

})


module.exports = {
    getPlantData, 
    setPlantData,
}

