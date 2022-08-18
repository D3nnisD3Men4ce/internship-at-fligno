const mongoose = require('mongoose')

const plantDataSchema = mongoose.Schema({
    
    // associate a user with a goal
    user: {         
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    timeID: {
        type: Number,
        unique: true
    },
    nutSol: {
        type: Number,
    },
    humidity: {
        type: Number,
    },
    phVal: {
        type: Number,
    },
    temp: {
        type: Number,
    },
    waterTemp: {
        type: Number,
    },
    waterLevel: {
        type: Number,
    },
    lux: {
        type: Number,
    }
    
}, 
    {
        timestamps: true
    }
)


module.exports = mongoose.model('PlantData', plantDataSchema)