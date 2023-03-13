import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max:5
    },
    ratings:{
        type: mongoose.Mixed,
 // A mixed type object to handle ratings. Each star level is represented in the ratings object
        1: Number, //  the key is the weight of that star level
        2: Number,
        3: Number,
        4: Number,
        5: Number,
    default: {1:1, 2:1, 3:1, 4:1, 5:1}},
    rooms: {
        type: [String],
        
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
})

export default mongoose.model("Hotel", HotelSchema)