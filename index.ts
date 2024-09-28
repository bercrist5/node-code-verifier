import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// configuration the .dev file

dotenv.config();

//create Express APP

const app = express();
const port = process.env.PORT || 8000;

// DEFINE OUR FIRST ROUTE OF THE APP
//esta es la raiz del proyecto
app.get('/', (req: Request, res: Response) => {
    //send mesaage
    res.send('APP Express + TS + Jest + Nodemon + Swagger + Mongoose')
});

app.get('/hello', (req: Request, res: Response) => {
    //send hello world
    res.send('Hello world')
});

//execute the APP and listen the requests to PORT
app.listen(port, () => {
    console.log(`conectado correctamente al puerto ${port} :)`)
})