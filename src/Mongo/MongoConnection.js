import mongoose from "mongoose";
import {CONNECT_TO_DATABASE, ERROR, OPEN} from "../Constants/MongoConstants";

export const getMongoConnection = (DATABASE_URL) => {
    mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    let db = mongoose.connection;
    db.on(ERROR, (error) => console.error(error));
    db.once(OPEN, () => console.log(CONNECT_TO_DATABASE));

};