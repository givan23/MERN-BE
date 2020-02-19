import express from 'express';
import {DATABASE_URL, HORSE_RACER_SERVICE} from "./Constants/MongoConstants";
import {getMongoConnection} from "./Mongo/MongoConnection";
import {getServerConnection} from "./Server/ServerConnection";
import {THREE_THOUSENDTWO_PORT} from "./Constants/ServerConstants";
import RaceHorseRouter from "./Routes/HorseRacerRouter.js";


//START DB
getMongoConnection(DATABASE_URL);

//START SERVER
getServerConnection(express, THREE_THOUSENDTWO_PORT, HORSE_RACER_SERVICE, RaceHorseRouter);



