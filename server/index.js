import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import generalRoutes from "./routes/generalRoutes.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());


// routes
app.use("/general",  generalRoutes );



//Mongodb setup

const PORT = process.env.PORT || 9000;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL)
.then(
  () => {app.listen(PORT, () => console.log(`server has started on port ${PORT}`));

})
.catch((error) => console.log(`${error} did not connect`));
