import express, { Application } from "express";
import morgan from "morgan";
import { useRoutes } from "./routes/index.routes";

//Create app
const app:Application = express();

//--> Middlewares <--
app.use(morgan("dev"));
app.use(express.json());
//--> Routes <--
useRoutes(app);

//Exporting app
export default app;