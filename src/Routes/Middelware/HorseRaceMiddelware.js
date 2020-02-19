import HorseRacer from "../../Models/HorseRacerModel";

export const findRacerById = async (req, res, next) => {
    let horseRacer = "";
    try {
        horseRacer = await HorseRacer.findById(req.params.id);
        if (horseRacer == null) {
            return res.status(404).json({message: 'Cant find horse Racer!'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.horseRacer = horseRacer;
    next();
};

