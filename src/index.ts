import express from "express";
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI)
    .then().catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})