import mongoose from "mongoose";

const HorseRacerModel = new mongoose.Schema({
    channelId: {
        type: Number,
        required: true
    },
    disciplineDescription: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

export default mongoose.model('HorseRacer', HorseRacerModel);