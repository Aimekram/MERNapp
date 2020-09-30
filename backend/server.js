const express = require("express");
require("dotenv/config");

const app = express();

//database connection
const connect = async () => {
    const MongoClient = require("mongodb").MongoClient;
    const client = new MongoClient(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, });
    
    try {
        await client.connect(err => {
            const collection = client.db("deselectDB")});
            console.log("Connected to MongoDB!")
    } catch (e) {
        console.error("Could not connect to MongoDB :(", e);
    } 
}

connect()

app.get("/", (req, res) => {
    res.send("Hello World")
})


//PORT listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app listening on port ${PORT}...`));