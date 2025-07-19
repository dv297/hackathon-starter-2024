import 'dotenv/config'

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import indexRouter from "./routes";

const port = process.env.PORT;
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
