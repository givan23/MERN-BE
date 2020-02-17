import express from 'express';
import {CONNECTED, HELLO_WORLD, THREE_THOUSEND} from "./Constants/ServerConstants";


const app = express();
app.get('/', function (req, res) {
  res.send(HELLO_WORLD);
});

app.listen(THREE_THOUSEND, function () {
  console.log(CONNECTED);
});