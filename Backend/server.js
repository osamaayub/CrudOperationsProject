
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
// const { dbConnection } = require("./connection/db");
const studentRoutes = require('./routes/Students')

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use("/api/Students", studentRoutes);

//conncet to db
// dbConnection;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to DB.");
    });

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});

