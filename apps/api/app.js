const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const logger = require("morgan");

const indexRouter = require("./routes/index");

const port = 3000;
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
