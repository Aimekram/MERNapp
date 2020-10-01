const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

const init = require('./routes/init');

//database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("Connected to MongoDB!")
    } catch(e) {
        console.error("Could not connect to MongoDB...", e)
    }
};

connect();

// use routes
app.use('/init', init);

const Student = require("./models/Student");
app.get("/", async (req, res) => {
    const students = await Student.find().sort("name")
    res.send(students)
})

//PORT listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app listening on port ${PORT}...`));