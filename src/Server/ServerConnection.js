import {CONNECTED} from "../Constants/ServerConstants";
import bodyParser from "body-parser";
import cors from  "cors";
export const getServerConnection = (express, porta, url_service, router) => {
    //TODO CREATE AN OBJECT ROUTER LIST

    //DECLARATION
    const app = express();

    //MIDDLEWARE
    app.use(cors({
        origin: 'http://localhost:8005'
        //credentials: true
    }));
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended: false}));


    //ROUTER LIST
    app.use(url_service, router);

    //START SERVER
    app.listen(porta, function () {
        console.log(CONNECTED);
    });

};