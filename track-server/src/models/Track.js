const  mongoose = require("mongoose")

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
});

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
    name: {
        type: 'string',
        default: ''
    },
    locations: [pointSchema]
});

mongoose.model("Track", trackSchema);
