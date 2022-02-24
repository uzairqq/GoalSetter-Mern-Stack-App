const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const routes = require("./routes/goalRoutes.js");
const { errorHandler } = require("./middleware/errorMiddleware.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", routes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server Started On Port ${port}`));
