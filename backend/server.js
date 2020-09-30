const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();


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

app.get("/", (req, res) => {
    res.send("Hello World")
})


//PORT listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app listening on port ${PORT}...`));