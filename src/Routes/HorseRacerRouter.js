import express from 'express';
const router = express.Router();
import HorseRacer from "../Models/HorseRacerSchema.js";
import {findRacerById} from "./Middelware/HorseRaceMiddelware";
import {horseRacerModel} from "../Models/HorseRacerModel";



/**
 * Get all horse racer list
 * GET http://localhost:3002/horse-racers
 */
router.get('/', async (req, res) => {

    try {

        const horseRacer = await HorseRacer.find();
        await res.json(horseRacer);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


/**
 * Get one horse racer list
 * GET http://localhost:3002/horse-racers/id
 */
router.get('/:id', findRacerById, (req, res) => {
    res.json(res.horseRacer);
});


/**
 * Create one horse racer list
 * POST http://localhost:3002/horse-racers
 */
router.post('/', async (req, res) => {

    try {
        const newHorseRacer = await horseRacerModel().save();
        res.status(201).json(newHorseRacer);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

});


/**
 * Update one horse racer list
 * PATCH http://localhost:3002/horse-racers/id
 */
/*
router.patch('/:id', findRacerById, async (req, res) => {
        if (req.body.channelId != null) {
            res.horseRacer.channelId = req.body.channelId;
        }

        if (req.body.disciplineDescription != null) {
            res.horseRacer.disciplineDescription = req.body.disciplineDescription;
        }
    try {
        const updatedSubscriber = await res.horseRacer.save();
        await res.json(updatedSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});
*/

/**
 * Delete one horse racer list
 * DELETE http://localhost:3002/horse-racers/id
 */
router.delete('/:id', findRacerById, async (req, res) => {
    try {
        await res.horseRacer.remove();
        await res.json({message: 'Deleted This horse racer'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;
