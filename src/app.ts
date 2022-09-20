import express, { Application } from "express";
import morgan from "morgan";

//Create app
const app:Application = express();

//--> Middlewares <--
app.use(morgan("dev"));
app.use(express.json());
//--> Routes <--


//Exporting app
export default app;