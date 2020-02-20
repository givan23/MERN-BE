import mongoose from "mongoose";

const HorseRacerSchema = new mongoose.Schema({
    code: {
        type: Number,
        required: true
    },
    result: {
        disciplineDescription: {
            type: String,
            required: true
        },
        subscribeDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        winningRacerName: [String],
        winningOdds: [Number],
        placeTwoRacerName: [String],
        placeTwoOdds: [Number],
        placeThreeRacerName: [String],
        placeThreeOdds: [Number],
    }
});

export default mongoose.model('HorseRacer', HorseRacerSchema);